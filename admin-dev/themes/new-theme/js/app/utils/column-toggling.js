/**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

const $ = global.$;

/**
 * If a table has togglable columns, it allows to toggle the value displayed in these columns.
 * This forces a page reload with more query parameters.
 */
class ColumnToggling {

    /**
     * @param {jQuery} table
     */
    constructor(table) {
        this.selector = '.ps-togglable-row';
        this.rows = table.find(this.selector);
    }

    /**
     * Attaches the listeners
     */
    attach() {
        this.rows.on('click', (e) => {
            this._toggleValue($(e.delegateTarget));
        });
    }

    /**
     * @param {jQuery} row
     * @private
     */
    _toggleValue(row) {
        var row_id = row.data('toggleFieldId');
        var urlForToggling = row.data('toggleUrl');

        $.post(urlForToggling, {'row_id': row_id }, function () {
        })
        .done(function () {
            location.reload();
        })
        .fail(function () {
            console.log('Failed to toggle row value ' + row_id + ' ' + row.data('toggleFieldName'));
        });
    }
}

export default ColumnToggling;
