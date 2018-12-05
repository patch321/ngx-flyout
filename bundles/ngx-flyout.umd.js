(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('tslib'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngx-flyout', ['exports', '@angular/core', 'tslib', '@angular/platform-browser'], factory) :
    (factory((global['ngx-flyout'] = {}),global.ng.core,global.tslib,global.ng.platformBrowser));
}(this, (function (exports,i0,tslib_1,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlyoutService = (function () {
        function FlyoutService() {
        }
        FlyoutService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        FlyoutService.ctorParameters = function () { return []; };
        /** @nocollapse */ FlyoutService.ngInjectableDef = i0.defineInjectable({ factory: function FlyoutService_Factory() { return new FlyoutService(); }, token: FlyoutService, providedIn: "root" });
        return FlyoutService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlyoutComponent = (function () {
        function FlyoutComponent() {
            /**
             * Fired when flyout is opened
             *
             * \@memberof FlyoutComponent
             */
            this.flyoutOpened = new i0.EventEmitter();
            /**
             * Fired when flyout is closed
             *
             * \@memberof FlyoutComponent
             */
            this.flyoutClosed = new i0.EventEmitter();
            /**
             * Use for two way data binding on open
             *
             * \@memberof FlyoutComponent
             */
            this.openChange = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'ngx-flyout',
                        template: "<div #backdrop (click)='onBackdropClick($event)'>\n</div>\n<div #flyout>\n  <div class=\"close-btn-container\" [ngClass]=\"showCloseButton ? '' : 'hidden'\">\n    <div class=\"close-btn\" (click)='onCloseButtonClick($event)'></div>\n  </div>\n  <div class=\"flyout-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                        styles: [".backdrop{position:fixed;top:0;bottom:0;left:0;right:0;background-color:#000;opacity:.5;display:none}.backdrop.open{display:block}.flyout{position:fixed;overflow:auto;background:#fff;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);will-change:transform}.flyout.left{top:0;bottom:0;left:0;height:100vh;max-width:100%}.flyout.right{top:0;bottom:0;right:0;height:100vh;max-width:100%}.flyout.top{left:0;right:0;top:0;width:100%;max-height:100vh}.flyout.bottom{left:0;right:0;bottom:0;max-height:100vh}.flyout.animated{transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.close-btn-container{text-align:right}.close-btn-container .close-btn{position:relative;display:inline-block;width:36px;height:36px;cursor:pointer}.close-btn-container .close-btn::after,.close-btn-container .close-btn::before{position:absolute;content:\"\";top:18px;left:6px;right:6px;width:24px;height:1px;background-color:#4b4545}.close-btn-container .close-btn::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-btn-container .close-btn::after{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.close-btn-container.hidden{display:none}"]
                    },] },
        ];
        /** @nocollapse */
        FlyoutComponent.ctorParameters = function () { return []; };
        FlyoutComponent.propDecorators = {
            "flyoutOpened": [{ type: i0.Output },],
            "flyoutClosed": [{ type: i0.Output },],
            "openChange": [{ type: i0.Output },],
            "position": [{ type: i0.Input },],
            "open": [{ type: i0.Input },],
            "showCloseButton": [{ type: i0.Input },],
            "flyoutClasses": [{ type: i0.Input },],
            "showBackdrop": [{ type: i0.Input },],
            "hideOnBackdropClick": [{ type: i0.Input },],
            "backdropClasses": [{ type: i0.Input },],
            "flyout": [{ type: i0.ViewChild, args: ['flyout',] },],
            "backdrop": [{ type: i0.ViewChild, args: ['backdrop',] },],
        };
        return FlyoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlyoutModule = (function () {
        function FlyoutModule() {
        }
        FlyoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            platformBrowser.BrowserModule
                        ],
                        declarations: [FlyoutComponent],
                        exports: [FlyoutComponent]
                    },] },
        ];
        return FlyoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.FlyoutService = FlyoutService;
    exports.FlyoutComponent = FlyoutComponent;
    exports.FlyoutModule = FlyoutModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZseW91dC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1mbHlvdXQvbGliL2ZseW91dC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtZmx5b3V0L2xpYi9mbHlvdXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtZmx5b3V0L2xpYi9mbHlvdXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1mbHlvdXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI2JhY2tkcm9wIChjbGljayk9J29uQmFja2Ryb3BDbGljaygkZXZlbnQpJz5cbjwvZGl2PlxuPGRpdiAjZmx5b3V0PlxuICA8ZGl2IGNsYXNzPVwiY2xvc2UtYnRuLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInNob3dDbG9zZUJ1dHRvbiA/ICcnIDogJ2hpZGRlbidcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtYnRuXCIgKGNsaWNrKT0nb25DbG9zZUJ1dHRvbkNsaWNrKCRldmVudCknPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZseW91dC1jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5iYWNrZHJvcHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7b3BhY2l0eTouNTtkaXNwbGF5Om5vbmV9LmJhY2tkcm9wLm9wZW57ZGlzcGxheTpibG9ja30uZmx5b3V0e3Bvc2l0aW9uOmZpeGVkO292ZXJmbG93OmF1dG87YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47Ym94LXNoYWRvdzowIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjIpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uZmx5b3V0LmxlZnR7dG9wOjA7Ym90dG9tOjA7bGVmdDowO2hlaWdodDoxMDB2aDttYXgtd2lkdGg6MTAwJX0uZmx5b3V0LnJpZ2h0e3RvcDowO2JvdHRvbTowO3JpZ2h0OjA7aGVpZ2h0OjEwMHZoO21heC13aWR0aDoxMDAlfS5mbHlvdXQudG9we2xlZnQ6MDtyaWdodDowO3RvcDowO3dpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDB2aH0uZmx5b3V0LmJvdHRvbXtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXgtaGVpZ2h0OjEwMHZofS5mbHlvdXQuYW5pbWF0ZWR7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXR9LmNsb3NlLWJ0bi1jb250YWluZXJ7dGV4dC1hbGlnbjpyaWdodH0uY2xvc2UtYnRuLWNvbnRhaW5lciAuY2xvc2UtYnRue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7Y3Vyc29yOnBvaW50ZXJ9LmNsb3NlLWJ0bi1jb250YWluZXIgLmNsb3NlLWJ0bjo6YWZ0ZXIsLmNsb3NlLWJ0bi1jb250YWluZXIgLmNsb3NlLWJ0bjo6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XCJcIjt0b3A6MThweDtsZWZ0OjZweDtyaWdodDo2cHg7d2lkdGg6MjRweDtoZWlnaHQ6MXB4O2JhY2tncm91bmQtY29sb3I6IzRiNDU0NX0uY2xvc2UtYnRuLWNvbnRhaW5lciAuY2xvc2UtYnRuOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uY2xvc2UtYnRuLWNvbnRhaW5lciAuY2xvc2UtYnRuOjphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9LmNsb3NlLWJ0bi1jb250YWluZXIuaGlkZGVue2Rpc3BsYXk6bm9uZX1gXVxufSlcblxuZXhwb3J0IGNsYXNzIEZseW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogRmlyZWQgd2hlbiBmbHlvdXQgaXMgb3BlbmVkXG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBmbHlvdXRPcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcblxuICAvKipcbiAgICogRmlyZWQgd2hlbiBmbHlvdXQgaXMgY2xvc2VkXG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBmbHlvdXRDbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcblxuICAvKipcbiAgICogVXNlIGZvciB0d28gd2F5IGRhdGEgYmluZGluZyBvbiBvcGVuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbiBvZiBsYXlvdXRcbiAgICogbGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tXG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHBvc2l0aW9uID0gJ3JpZ2h0JztcblxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGZseW91dCBpcyBvcGVuIG9yIG5vdFxuICAgKiBcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb3BlbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgY2xvc2UgYnV0dG9uIG9yIG5vdFxuICAgKiBcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd0Nsb3NlQnV0dG9uID0gdHJ1ZTtcblxuICAvKipcbiAgICogQWRkaXRpb25hbCBjc3MgY2xhc3NlcyB0byBzdHlsZSBmbHlvdXRcbiAgICogXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGZseW91dENsYXNzZXMgPSBbXTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IGJhY2tkcm9wIG9yIG5vdFxuICAgKiBcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd0JhY2tkcm9wID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBjbG9zZSBmbHlvdXQgd2hlbiBjbGlja2VkIG9uIGJhY2tkcm9wXG4gICAqIFxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBoaWRlT25CYWNrZHJvcENsaWNrID0gdHJ1ZTtcblxuICAvKipcbiAgICogQWRkaXRpb25hbCBjc3MgY2xhc3NlcyB0byBzdHlsZSBiYWNrZHJvcFxuICAgKiBcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgYmFja2Ryb3BDbGFzc2VzID0gW107XG5cbiAgLyoqXG4gICAqIEZseW91dCBlbGVtZW50IHJlZmVyZW5jZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBAVmlld0NoaWxkKCdmbHlvdXQnKSBmbHlvdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIEJhY2tkcm9wIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2JhY2tkcm9wJykgYmFja2Ryb3A6IEVsZW1lbnRSZWY7XG5cblxuICAvKipcbiAgICogRGVmYXVsdCBjc3MgY2xhc3NlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgb24gZmx5b3V0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIF9kZWZhdWx0Rmx5b3V0Q2xhc3NlcyA9IFsnZmx5b3V0J107XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY3NzIGNsYXNzZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIG9uIGJhY2tkcm9wXG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIF9kZWZhdWx0QmFja2Ryb3BDbGFzc2VzID0gWydiYWNrZHJvcCddO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyVWkoKTtcbiAgICB0aGlzLl9lbmFibGVBbmltYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgbmdPbkNoYW5nZXMgZXZlbnRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydvcGVuJ10pIHtcbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5fb3BlbkZseW91dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2xvc2VGbHlvdXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyVWkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNzcyBjbGFzc2VzIG9uIGZseW91dFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBfdXBkYXRlRmx5b3V0Q2xhc3NMaXN0KCkge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IFsuLi50aGlzLl9kZWZhdWx0Rmx5b3V0Q2xhc3NlcywgLi4udGhpcy5mbHlvdXRDbGFzc2VzLCB0aGlzLnBvc2l0aW9uXTtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICBjbGFzc0xpc3QucHVzaCgnb3BlbicpO1xuICAgIH1cbiAgICB0aGlzLmZseW91dC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTGlzdC5qb2luKCcgJyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRyYW5zcG9ybSBwcm9wZXJ0eSBvZiBmbHlvdXRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgX3VwZGF0ZUZseW91dFRyYW5zZm9ybSgpIHtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLmZseW91dC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZseW91dC5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3QgZGltZW5zaW9uID0ge1xuICAgICAgICBsZWZ0OiBwYXJzZUludChlbGVtZW50LnN0eWxlLmxlZnQsIDEwKSB8fCAwLFxuICAgICAgICByaWdodDogcGFyc2VJbnQoZWxlbWVudC5zdHlsZS5yaWdodCwgMTApIHx8IDAsXG4gICAgICAgIHRvcDogcGFyc2VJbnQoZWxlbWVudC5zdHlsZS50b3AsIDEwKSB8fCAwLFxuICAgICAgICBib3R0b206IHBhcnNlSW50KGVsZW1lbnQuc3R5bGUuYm90dG9tLCAxMCkgfHwgMCxcbiAgICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCxcbiAgICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwXG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICB0aGlzLmZseW91dC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCAtJyArIGRpbWVuc2lvbi5oZWlnaHQgKyAncHgsIDApJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICB0aGlzLmZseW91dC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCAnICsgZGltZW5zaW9uLmhlaWdodCArICdweCwgMCknO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICB0aGlzLmZseW91dC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgtJyArIGRpbWVuc2lvbi53aWR0aCArICdweCwgMCwgMCknO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuZmx5b3V0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyBkaW1lbnNpb24ud2lkdGggKyAncHgsIDAsIDApJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNzcyBjbGFzc2VzIG9uIGJhY2tkcm9wIGVsZW1lbnRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgX3VwZGF0ZUJhY2tkcm9wQ2xhc3NMaXN0KCkge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IFsuLi50aGlzLl9kZWZhdWx0QmFja2Ryb3BDbGFzc2VzLCAuLi50aGlzLmJhY2tkcm9wQ2xhc3Nlc107XG4gICAgaWYgKHRoaXMuc2hvd0JhY2tkcm9wICYmIHRoaXMub3Blbikge1xuICAgICAgY2xhc3NMaXN0LnB1c2goJ29wZW4nKTtcbiAgICB9XG4gICAgdGhpcy5iYWNrZHJvcC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTGlzdC5qb2luKCcgJyk7XG4gIH1cblxuICAvKipcbiAgICogT3Blbi9TaG93IGZseW91dFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBfb3BlbkZseW91dCgpIHtcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgIHRoaXMuX3JlbmRlclVpKCk7XG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5vcGVuKTtcbiAgICB0aGlzLmZseW91dE9wZW5lZC5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UvSGlkZSBmbHlvdXRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgX2Nsb3NlRmx5b3V0KCkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbmRlclVpKCk7XG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5vcGVuKTtcbiAgICB0aGlzLmZseW91dENsb3NlZC5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBVSVxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBfcmVuZGVyVWkoKSB7XG4gICAgdGhpcy5fdXBkYXRlQmFja2Ryb3BDbGFzc0xpc3QoKTtcbiAgICB0aGlzLl91cGRhdGVGbHlvdXRDbGFzc0xpc3QoKTtcbiAgICB0aGlzLl91cGRhdGVGbHlvdXRUcmFuc2Zvcm0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGZseW91dCBhbmltYXRlZFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBfZW5hYmxlQW5pbWF0aW9uKCkge1xuICAgIHRoaXMuX2RlZmF1bHRGbHlvdXRDbGFzc2VzLnB1c2goJ2FuaW1hdGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNsb3NlIGJ1dHRvbiBjbGljayBldmVudFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBvbkNsb3NlQnV0dG9uQ2xpY2soJGV2ZW50KSB7XG4gICAgdGhpcy5fY2xvc2VGbHlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYmFja2Ryb3AgY2xpY2sgZXZlbnRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgb25CYWNrZHJvcENsaWNrKCRldmVudCkge1xuICAgIGlmICh0aGlzLmhpZGVPbkJhY2tkcm9wQ2xpY2spIHtcbiAgICAgIHRoaXMuX2Nsb3NlRmx5b3V0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRmx5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9mbHlvdXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRmx5b3V0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ZseW91dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJPdXRwdXQiLCJJbnB1dCIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIiwiQnJvd3Nlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NEJBSkQ7Ozs7Ozs7O1FDbUlFOzs7Ozs7Z0NBekdlLElBQUlDLGVBQVksRUFBVTs7Ozs7O2dDQVExQixJQUFJQSxlQUFZLEVBQVU7Ozs7Ozs4QkFRNUIsSUFBSUEsZUFBWSxFQUFXOzs7Ozs7OzRCQVM3QixPQUFPOzs7Ozs7d0JBU1gsS0FBSzs7Ozs7O21DQVFNLElBQUk7Ozs7OztpQ0FRTixFQUFFOzs7Ozs7Z0NBUUgsSUFBSTs7Ozs7O3VDQVFHLElBQUk7Ozs7OzttQ0FRUixFQUFFOzs7Ozs7eUNBc0JJLENBQUMsUUFBUSxDQUFDOzs7Ozs7MkNBT1IsQ0FBQyxVQUFVLENBQUM7U0FFckI7Ozs7UUFFakIsa0NBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7Ozs7Ozs7Ozs7Ozs7UUFPRCxxQ0FBVzs7Ozs7OztZQUFYLFVBQVksT0FBTztnQkFDakIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ3BCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztxQkFDckI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNsQjthQUNGOzs7Ozs7Ozs7Ozs7UUFPRCxnREFBc0I7Ozs7OztZQUF0QjtnQkFDRSxxQkFBTSxTQUFTLG9CQUFPLElBQUksQ0FBQyxxQkFBcUIsRUFBSyxJQUFJLENBQUMsYUFBYSxHQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQztnQkFDeEYsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hCO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNEOzs7Ozs7Ozs7Ozs7UUFPRCxnREFBc0I7Ozs7OztZQUF0QjtnQkFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztpQkFDcEU7cUJBQU07b0JBQ0wscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO29CQUMxQyxxQkFBTSxTQUFTLEdBQUc7d0JBQ2hCLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDM0MsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUM3QyxHQUFHLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQ3pDLE1BQU0sRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDL0MsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQzt3QkFDL0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQztxQkFDbEMsQ0FBQztvQkFFRixRQUFRLElBQUksQ0FBQyxRQUFRO3dCQUNuQixLQUFLLEtBQUs7NEJBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQzs0QkFDN0YsTUFBTTt3QkFDUixLQUFLLFFBQVE7NEJBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQzs0QkFDNUYsTUFBTTt3QkFDUixLQUFLLE1BQU07NEJBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxlQUFlLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7NEJBQzVGLE1BQU07d0JBQ1I7NEJBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7NEJBQzNGLE1BQU07cUJBQ1Q7aUJBQ0Y7YUFDRjs7Ozs7Ozs7Ozs7O1FBT0Qsa0RBQXdCOzs7Ozs7WUFBeEI7Z0JBQ0UscUJBQU0sU0FBUyxvQkFBTyxJQUFJLENBQUMsdUJBQXVCLEVBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0Q7Ozs7Ozs7Ozs7OztRQU9ELHFDQUFXOzs7Ozs7WUFBWDtnQkFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7Ozs7Ozs7Ozs7OztRQU9ELHNDQUFZOzs7Ozs7WUFBWjtnQkFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7Ozs7Ozs7Ozs7OztRQU9ELG1DQUFTOzs7Ozs7WUFBVDtnQkFDRSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQy9COzs7Ozs7Ozs7Ozs7UUFPRCwwQ0FBZ0I7Ozs7OztZQUFoQjtnQkFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzdDOzs7Ozs7Ozs7Ozs7O1FBT0QsNENBQWtCOzs7Ozs7O1lBQWxCLFVBQW1CLE1BQU07Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7Ozs7Ozs7Ozs7OztRQU9ELHlDQUFlOzs7Ozs7O1lBQWYsVUFBZ0IsTUFBTTtnQkFDcEIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7YUFDRjs7b0JBclJGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSx3VUFVWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxtMENBQWkwQyxDQUFDO3FCQUM1MEM7Ozs7O3FDQVNFQyxTQUFNO3FDQVFOQSxTQUFNO21DQVFOQSxTQUFNO2lDQVNOQyxRQUFLOzZCQVNMQSxRQUFLO3dDQVFMQSxRQUFLO3NDQVFMQSxRQUFLO3FDQVFMQSxRQUFLOzRDQVFMQSxRQUFLO3dDQVFMQSxRQUFLOytCQVFMQyxZQUFTLFNBQUMsUUFBUTtpQ0FPbEJBLFlBQVMsU0FBQyxVQUFVOzs4QkFsSHZCOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLDZCQUFhO3lCQUNkO3dCQUNELFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUMzQjs7MkJBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=