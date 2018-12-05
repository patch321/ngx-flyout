/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
var FlyoutComponent = /** @class */ (function () {
    function FlyoutComponent() {
        /**
         * Fired when flyout is opened
         *
         * \@memberof FlyoutComponent
         */
        this.flyoutOpened = new EventEmitter();
        /**
         * Fired when flyout is closed
         *
         * \@memberof FlyoutComponent
         */
        this.flyoutClosed = new EventEmitter();
        /**
         * Use for two way data binding on open
         *
         * \@memberof FlyoutComponent
         */
        this.openChange = new EventEmitter();
        /**
         * Position of layout
         * left, right, top, bottom
         *
         * \@memberof FlyoutComponent
         */
        this.position = 'right';
        /**
         * Whether flyout is open or not
         *
         * \@memberof FlyoutComponent
         */
        this.open = false;
        /**
         * Whether to show close button or not
         *
         * \@memberof FlyoutComponent
         */
        this.showCloseButton = true;
        /**
         * Additional css classes to style flyout
         *
         * \@memberof FlyoutComponent
         */
        this.flyoutClasses = [];
        /**
         * Whether to show backdrop or not
         *
         * \@memberof FlyoutComponent
         */
        this.showBackdrop = true;
        /**
         * Whether to close flyout when clicked on backdrop
         *
         * \@memberof FlyoutComponent
         */
        this.hideOnBackdropClick = true;
        /**
         * Additional css classes to style backdrop
         *
         * \@memberof FlyoutComponent
         */
        this.backdropClasses = [];
        /**
         * Default css classes which will be applied on flyout
         *
         * \@memberof FlyoutComponent
         */
        this._defaultFlyoutClasses = ['flyout'];
        /**
         * Default css classes which will be applied on backdrop
         *
         * \@memberof FlyoutComponent
         */
        this._defaultBackdropClasses = ['backdrop'];
    }
    /**
     * @return {?}
     */
    FlyoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderUi();
        this._enableAnimation();
    };
    /**
     * Handle ngOnChanges event
     *
     * @memberof FlyoutComponent
     */
    /**
     * Handle ngOnChanges event
     *
     * \@memberof FlyoutComponent
     * @param {?} changes
     * @return {?}
     */
    FlyoutComponent.prototype.ngOnChanges = /**
     * Handle ngOnChanges event
     *
     * \@memberof FlyoutComponent
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['open']) {
            if (this.open) {
                this._openFlyout();
            }
            else {
                this._closeFlyout();
            }
        }
        else {
            this._renderUi();
        }
    };
    /**
     * Update css classes on flyout
     *
     * @memberof FlyoutComponent
     */
    /**
     * Update css classes on flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    FlyoutComponent.prototype._updateFlyoutClassList = /**
     * Update css classes on flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    function () {
        var /** @type {?} */ classList = tslib_1.__spread(this._defaultFlyoutClasses, this.flyoutClasses, [this.position]);
        if (this.open) {
            classList.push('open');
        }
        this.flyout.nativeElement.className = classList.join(' ');
    };
    /**
     * Update transporm property of flyout
     *
     * @memberof FlyoutComponent
     */
    /**
     * Update transporm property of flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    FlyoutComponent.prototype._updateFlyoutTransform = /**
     * Update transporm property of flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    function () {
        if (this.open) {
            this.flyout.nativeElement.style.transform = 'translate3d(0, 0, 0)';
        }
        else {
            var /** @type {?} */ element = this.flyout.nativeElement;
            var /** @type {?} */ dimension = {
                left: parseInt(element.style.left, 10) || 0,
                right: parseInt(element.style.right, 10) || 0,
                top: parseInt(element.style.top, 10) || 0,
                bottom: parseInt(element.style.bottom, 10) || 0,
                width: element.offsetWidth || 0,
                height: element.offsetHeight || 0
            };
            switch (this.position) {
                case 'top':
                    this.flyout.nativeElement.style.transform = 'translate3d(0, -' + dimension.height + 'px, 0)';
                    break;
                case 'bottom':
                    this.flyout.nativeElement.style.transform = 'translate3d(0, ' + dimension.height + 'px, 0)';
                    break;
                case 'left':
                    this.flyout.nativeElement.style.transform = 'translate3d(-' + dimension.width + 'px, 0, 0)';
                    break;
                default:
                    this.flyout.nativeElement.style.transform = 'translate3d(' + dimension.width + 'px, 0, 0)';
                    break;
            }
        }
    };
    /**
     * Update css classes on backdrop element
     *
     * @memberof FlyoutComponent
     */
    /**
     * Update css classes on backdrop element
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    FlyoutComponent.prototype._updateBackdropClassList = /**
     * Update css classes on backdrop element
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    function () {
        var /** @type {?} */ classList = tslib_1.__spread(this._defaultBackdropClasses, this.backdropClasses);
        if (this.showBackdrop && this.open) {
            classList.push('open');
        }
        this.backdrop.nativeElement.className = classList.join(' ');
    };
    /**
     * Open/Show flyout
     *
     * @memberof FlyoutComponent
     */
    /**
     * Open/Show flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    FlyoutComponent.prototype._openFlyout = /**
     * Open/Show flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    function () {
        this.open = true;
        this._renderUi();
        this.openChange.emit(this.open);
        this.flyoutOpened.emit();
    };
    /**
     * Close/Hide flyout
     *
     * @memberof FlyoutComponent
     */
    /**
     * Close/Hide flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    FlyoutComponent.prototype._closeFlyout = /**
     * Close/Hide flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    function () {
        this.open = false;
        this._renderUi();
        this.openChange.emit(this.open);
        this.flyoutClosed.emit();
    };
    /**
     * Render the UI
     *
     * @memberof FlyoutComponent
     */
    /**
     * Render the UI
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    FlyoutComponent.prototype._renderUi = /**
     * Render the UI
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    function () {
        this._updateBackdropClassList();
        this._updateFlyoutClassList();
        this._updateFlyoutTransform();
    };
    /**
     * Make flyout animated
     *
     * @memberof FlyoutComponent
     */
    /**
     * Make flyout animated
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    FlyoutComponent.prototype._enableAnimation = /**
     * Make flyout animated
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    function () {
        this._defaultFlyoutClasses.push('animated');
    };
    /**
     * Handle close button click event
     *
     * @memberof FlyoutComponent
     */
    /**
     * Handle close button click event
     *
     * \@memberof FlyoutComponent
     * @param {?} $event
     * @return {?}
     */
    FlyoutComponent.prototype.onCloseButtonClick = /**
     * Handle close button click event
     *
     * \@memberof FlyoutComponent
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._closeFlyout();
    };
    /**
     * Handle backdrop click event
     *
     * @memberof FlyoutComponent
     */
    /**
     * Handle backdrop click event
     *
     * \@memberof FlyoutComponent
     * @param {?} $event
     * @return {?}
     */
    FlyoutComponent.prototype.onBackdropClick = /**
     * Handle backdrop click event
     *
     * \@memberof FlyoutComponent
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.hideOnBackdropClick) {
            this._closeFlyout();
        }
    };
    FlyoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-flyout',
                    template: "<div #backdrop (click)='onBackdropClick($event)'>\n</div>\n<div #flyout>\n  <div class=\"close-btn-container\" [ngClass]=\"showCloseButton ? '' : 'hidden'\">\n    <div class=\"close-btn\" (click)='onCloseButtonClick($event)'></div>\n  </div>\n  <div class=\"flyout-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".backdrop{position:fixed;top:0;bottom:0;left:0;right:0;background-color:#000;opacity:.5;display:none}.backdrop.open{display:block}.flyout{position:fixed;overflow:auto;background:#fff;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);will-change:transform}.flyout.left{top:0;bottom:0;left:0;height:100vh;max-width:100%}.flyout.right{top:0;bottom:0;right:0;height:100vh;max-width:100%}.flyout.top{left:0;right:0;top:0;width:100%;max-height:100vh}.flyout.bottom{left:0;right:0;bottom:0;max-height:100vh}.flyout.animated{transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.close-btn-container{text-align:right}.close-btn-container .close-btn{position:relative;display:inline-block;width:36px;height:36px;cursor:pointer}.close-btn-container .close-btn::after,.close-btn-container .close-btn::before{position:absolute;content:\"\";top:18px;left:6px;right:6px;width:24px;height:1px;background-color:#4b4545}.close-btn-container .close-btn::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-btn-container .close-btn::after{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.close-btn-container.hidden{display:none}"]
                },] },
    ];
    /** @nocollapse */
    FlyoutComponent.ctorParameters = function () { return []; };
    FlyoutComponent.propDecorators = {
        "flyoutOpened": [{ type: Output },],
        "flyoutClosed": [{ type: Output },],
        "openChange": [{ type: Output },],
        "position": [{ type: Input },],
        "open": [{ type: Input },],
        "showCloseButton": [{ type: Input },],
        "flyoutClasses": [{ type: Input },],
        "showBackdrop": [{ type: Input },],
        "hideOnBackdropClick": [{ type: Input },],
        "backdropClasses": [{ type: Input },],
        "flyout": [{ type: ViewChild, args: ['flyout',] },],
        "backdrop": [{ type: ViewChild, args: ['backdrop',] },],
    };
    return FlyoutComponent;
}());
export { FlyoutComponent };
function FlyoutComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FlyoutComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FlyoutComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FlyoutComponent.propDecorators;
    /**
     * Fired when flyout is opened
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.flyoutOpened;
    /**
     * Fired when flyout is closed
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.flyoutClosed;
    /**
     * Use for two way data binding on open
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.openChange;
    /**
     * Position of layout
     * left, right, top, bottom
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.position;
    /**
     * Whether flyout is open or not
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.open;
    /**
     * Whether to show close button or not
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.showCloseButton;
    /**
     * Additional css classes to style flyout
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.flyoutClasses;
    /**
     * Whether to show backdrop or not
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.showBackdrop;
    /**
     * Whether to close flyout when clicked on backdrop
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.hideOnBackdropClick;
    /**
     * Additional css classes to style backdrop
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.backdropClasses;
    /**
     * Flyout element reference
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.flyout;
    /**
     * Backdrop element reference
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype.backdrop;
    /**
     * Default css classes which will be applied on flyout
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype._defaultFlyoutClasses;
    /**
     * Default css classes which will be applied on backdrop
     *
     * \@memberof FlyoutComponent
     * @type {?}
     */
    FlyoutComponent.prototype._defaultBackdropClasses;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mbHlvdXQvIiwic291cmNlcyI6WyJsaWIvZmx5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7SUFtSS9HOzs7Ozs7NEJBekdlLElBQUksWUFBWSxFQUFVOzs7Ozs7NEJBUTFCLElBQUksWUFBWSxFQUFVOzs7Ozs7MEJBUTVCLElBQUksWUFBWSxFQUFXOzs7Ozs7O3dCQVM3QixPQUFPOzs7Ozs7b0JBU1gsS0FBSzs7Ozs7OytCQVFNLElBQUk7Ozs7Ozs2QkFRTixFQUFFOzs7Ozs7NEJBUUgsSUFBSTs7Ozs7O21DQVFHLElBQUk7Ozs7OzsrQkFRUixFQUFFOzs7Ozs7cUNBc0JJLENBQUMsUUFBUSxDQUFDOzs7Ozs7dUNBT1IsQ0FBQyxVQUFVLENBQUM7S0FFckI7Ozs7SUFFakIsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCxxQ0FBVzs7Ozs7OztJQUFYLFVBQVksT0FBTztRQUNqQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtTQUNGO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7S0FD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LENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7S0FDRjs7Z0JBclJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHdVQVVYO29CQUNDLE1BQU0sRUFBRSxDQUFDLG0wQ0FBaTBDLENBQUM7aUJBQzUwQzs7Ozs7aUNBU0UsTUFBTTtpQ0FRTixNQUFNOytCQVFOLE1BQU07NkJBU04sS0FBSzt5QkFTTCxLQUFLO29DQVFMLEtBQUs7a0NBUUwsS0FBSztpQ0FRTCxLQUFLO3dDQVFMLEtBQUs7b0NBUUwsS0FBSzsyQkFRTCxTQUFTLFNBQUMsUUFBUTs2QkFPbEIsU0FBUyxTQUFDLFVBQVU7OzBCQWxIdkI7O1NBa0JhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZmx5b3V0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICNiYWNrZHJvcCAoY2xpY2spPSdvbkJhY2tkcm9wQ2xpY2soJGV2ZW50KSc+XG48L2Rpdj5cbjxkaXYgI2ZseW91dD5cbiAgPGRpdiBjbGFzcz1cImNsb3NlLWJ0bi1jb250YWluZXJcIiBbbmdDbGFzc109XCJzaG93Q2xvc2VCdXR0b24gPyAnJyA6ICdoaWRkZW4nXCI+XG4gICAgPGRpdiBjbGFzcz1cImNsb3NlLWJ0blwiIChjbGljayk9J29uQ2xvc2VCdXR0b25DbGljaygkZXZlbnQpJz48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmbHlvdXQtY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AuYmFja2Ryb3B7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZC1jb2xvcjojMDAwO29wYWNpdHk6LjU7ZGlzcGxheTpub25lfS5iYWNrZHJvcC5vcGVue2Rpc3BsYXk6YmxvY2t9LmZseW91dHtwb3NpdGlvbjpmaXhlZDtvdmVyZmxvdzphdXRvO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JveC1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4yKTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LmZseW91dC5sZWZ0e3RvcDowO2JvdHRvbTowO2xlZnQ6MDtoZWlnaHQ6MTAwdmg7bWF4LXdpZHRoOjEwMCV9LmZseW91dC5yaWdodHt0b3A6MDtib3R0b206MDtyaWdodDowO2hlaWdodDoxMDB2aDttYXgtd2lkdGg6MTAwJX0uZmx5b3V0LnRvcHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDt3aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwdmh9LmZseW91dC5ib3R0b217bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7bWF4LWhlaWdodDoxMDB2aH0uZmx5b3V0LmFuaW1hdGVke3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0fS5jbG9zZS1idG4tY29udGFpbmVye3RleHQtYWxpZ246cmlnaHR9LmNsb3NlLWJ0bi1jb250YWluZXIgLmNsb3NlLWJ0bntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDozNnB4O2hlaWdodDozNnB4O2N1cnNvcjpwb2ludGVyfS5jbG9zZS1idG4tY29udGFpbmVyIC5jbG9zZS1idG46OmFmdGVyLC5jbG9zZS1idG4tY29udGFpbmVyIC5jbG9zZS1idG46OmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlwiXCI7dG9wOjE4cHg7bGVmdDo2cHg7cmlnaHQ6NnB4O3dpZHRoOjI0cHg7aGVpZ2h0OjFweDtiYWNrZ3JvdW5kLWNvbG9yOiM0YjQ1NDV9LmNsb3NlLWJ0bi1jb250YWluZXIgLmNsb3NlLWJ0bjo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LmNsb3NlLWJ0bi1jb250YWluZXIgLmNsb3NlLWJ0bjo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfS5jbG9zZS1idG4tY29udGFpbmVyLmhpZGRlbntkaXNwbGF5Om5vbmV9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBGbHlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gZmx5b3V0IGlzIG9wZW5lZFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmx5b3V0T3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gZmx5b3V0IGlzIGNsb3NlZFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmx5b3V0Q2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XG5cbiAgLyoqXG4gICAqIFVzZSBmb3IgdHdvIHdheSBkYXRhIGJpbmRpbmcgb24gb3BlblxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogUG9zaXRpb24gb2YgbGF5b3V0XG4gICAqIGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbVxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBwb3NpdGlvbiA9ICdyaWdodCc7XG5cblxuICAvKipcbiAgICogV2hldGhlciBmbHlvdXQgaXMgb3BlbiBvciBub3RcbiAgICogXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG9wZW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IGNsb3NlIGJ1dHRvbiBvciBub3RcbiAgICogXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgY3NzIGNsYXNzZXMgdG8gc3R5bGUgZmx5b3V0XG4gICAqIFxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBmbHlvdXRDbGFzc2VzID0gW107XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBiYWNrZHJvcCBvciBub3RcbiAgICogXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dCYWNrZHJvcCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gY2xvc2UgZmx5b3V0IHdoZW4gY2xpY2tlZCBvbiBiYWNrZHJvcFxuICAgKiBcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaGlkZU9uQmFja2Ryb3BDbGljayA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgY3NzIGNsYXNzZXMgdG8gc3R5bGUgYmFja2Ryb3BcbiAgICogXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGJhY2tkcm9wQ2xhc3NlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBGbHlvdXQgZWxlbWVudCByZWZlcmVuY2VcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQFZpZXdDaGlsZCgnZmx5b3V0JykgZmx5b3V0OiBFbGVtZW50UmVmO1xuXG4gIC8qKlxuICAgKiBCYWNrZHJvcCBlbGVtZW50IHJlZmVyZW5jZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBAVmlld0NoaWxkKCdiYWNrZHJvcCcpIGJhY2tkcm9wOiBFbGVtZW50UmVmO1xuXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY3NzIGNsYXNzZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIG9uIGZseW91dFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBfZGVmYXVsdEZseW91dENsYXNzZXMgPSBbJ2ZseW91dCddO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGNzcyBjbGFzc2VzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCBvbiBiYWNrZHJvcFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBfZGVmYXVsdEJhY2tkcm9wQ2xhc3NlcyA9IFsnYmFja2Ryb3AnXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlclVpKCk7XG4gICAgdGhpcy5fZW5hYmxlQW5pbWF0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIG5nT25DaGFuZ2VzIGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snb3BlbiddKSB7XG4gICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuX29wZW5GbHlvdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlRmx5b3V0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlclVpKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjc3MgY2xhc3NlcyBvbiBmbHlvdXRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgX3VwZGF0ZUZseW91dENsYXNzTGlzdCgpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBbLi4udGhpcy5fZGVmYXVsdEZseW91dENsYXNzZXMsIC4uLnRoaXMuZmx5b3V0Q2xhc3NlcywgdGhpcy5wb3NpdGlvbl07XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgY2xhc3NMaXN0LnB1c2goJ29wZW4nKTtcbiAgICB9XG4gICAgdGhpcy5mbHlvdXQubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc0xpc3Quam9pbignICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0cmFuc3Bvcm0gcHJvcGVydHkgb2YgZmx5b3V0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIF91cGRhdGVGbHlvdXRUcmFuc2Zvcm0oKSB7XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgdGhpcy5mbHlvdXQubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwgMCwgMCknO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5mbHlvdXQubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHtcbiAgICAgICAgbGVmdDogcGFyc2VJbnQoZWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgfHwgMCxcbiAgICAgICAgcmlnaHQ6IHBhcnNlSW50KGVsZW1lbnQuc3R5bGUucmlnaHQsIDEwKSB8fCAwLFxuICAgICAgICB0b3A6IHBhcnNlSW50KGVsZW1lbnQuc3R5bGUudG9wLCAxMCkgfHwgMCxcbiAgICAgICAgYm90dG9tOiBwYXJzZUludChlbGVtZW50LnN0eWxlLmJvdHRvbSwgMTApIHx8IDAsXG4gICAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDAsXG4gICAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMFxuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgdGhpcy5mbHlvdXQubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwgLScgKyBkaW1lbnNpb24uaGVpZ2h0ICsgJ3B4LCAwKSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgdGhpcy5mbHlvdXQubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwgJyArIGRpbWVuc2lvbi5oZWlnaHQgKyAncHgsIDApJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgdGhpcy5mbHlvdXQubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoLScgKyBkaW1lbnNpb24ud2lkdGggKyAncHgsIDAsIDApJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmZseW91dC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgZGltZW5zaW9uLndpZHRoICsgJ3B4LCAwLCAwKSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjc3MgY2xhc3NlcyBvbiBiYWNrZHJvcCBlbGVtZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIF91cGRhdGVCYWNrZHJvcENsYXNzTGlzdCgpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBbLi4udGhpcy5fZGVmYXVsdEJhY2tkcm9wQ2xhc3NlcywgLi4udGhpcy5iYWNrZHJvcENsYXNzZXNdO1xuICAgIGlmICh0aGlzLnNob3dCYWNrZHJvcCAmJiB0aGlzLm9wZW4pIHtcbiAgICAgIGNsYXNzTGlzdC5wdXNoKCdvcGVuJyk7XG4gICAgfVxuICAgIHRoaXMuYmFja2Ryb3AubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc0xpc3Quam9pbignICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4vU2hvdyBmbHlvdXRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgX29wZW5GbHlvdXQoKSB7XG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICB0aGlzLl9yZW5kZXJVaSgpO1xuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3Blbik7XG4gICAgdGhpcy5mbHlvdXRPcGVuZWQuZW1pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlL0hpZGUgZmx5b3V0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIF9jbG9zZUZseW91dCgpIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLl9yZW5kZXJVaSgpO1xuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3Blbik7XG4gICAgdGhpcy5mbHlvdXRDbG9zZWQuZW1pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgVUlcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgX3JlbmRlclVpKCkge1xuICAgIHRoaXMuX3VwZGF0ZUJhY2tkcm9wQ2xhc3NMaXN0KCk7XG4gICAgdGhpcy5fdXBkYXRlRmx5b3V0Q2xhc3NMaXN0KCk7XG4gICAgdGhpcy5fdXBkYXRlRmx5b3V0VHJhbnNmb3JtKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBmbHlvdXQgYW5pbWF0ZWRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgX2VuYWJsZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLl9kZWZhdWx0Rmx5b3V0Q2xhc3Nlcy5wdXNoKCdhbmltYXRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjbG9zZSBidXR0b24gY2xpY2sgZXZlbnRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgb25DbG9zZUJ1dHRvbkNsaWNrKCRldmVudCkge1xuICAgIHRoaXMuX2Nsb3NlRmx5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGJhY2tkcm9wIGNsaWNrIGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIG9uQmFja2Ryb3BDbGljaygkZXZlbnQpIHtcbiAgICBpZiAodGhpcy5oaWRlT25CYWNrZHJvcENsaWNrKSB7XG4gICAgICB0aGlzLl9jbG9zZUZseW91dCgpO1xuICAgIH1cbiAgfVxufVxuIl19