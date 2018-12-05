/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
export class FlyoutComponent {
    constructor() {
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
    ngOnInit() {
        this._renderUi();
        this._enableAnimation();
    }
    /**
     * Handle ngOnChanges event
     *
     * \@memberof FlyoutComponent
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * Update css classes on flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    _updateFlyoutClassList() {
        const /** @type {?} */ classList = [...this._defaultFlyoutClasses, ...this.flyoutClasses, this.position];
        if (this.open) {
            classList.push('open');
        }
        this.flyout.nativeElement.className = classList.join(' ');
    }
    /**
     * Update transporm property of flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    _updateFlyoutTransform() {
        if (this.open) {
            this.flyout.nativeElement.style.transform = 'translate3d(0, 0, 0)';
        }
        else {
            const /** @type {?} */ element = this.flyout.nativeElement;
            const /** @type {?} */ dimension = {
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
    }
    /**
     * Update css classes on backdrop element
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    _updateBackdropClassList() {
        const /** @type {?} */ classList = [...this._defaultBackdropClasses, ...this.backdropClasses];
        if (this.showBackdrop && this.open) {
            classList.push('open');
        }
        this.backdrop.nativeElement.className = classList.join(' ');
    }
    /**
     * Open/Show flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    _openFlyout() {
        this.open = true;
        this._renderUi();
        this.openChange.emit(this.open);
        this.flyoutOpened.emit();
    }
    /**
     * Close/Hide flyout
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    _closeFlyout() {
        this.open = false;
        this._renderUi();
        this.openChange.emit(this.open);
        this.flyoutClosed.emit();
    }
    /**
     * Render the UI
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    _renderUi() {
        this._updateBackdropClassList();
        this._updateFlyoutClassList();
        this._updateFlyoutTransform();
    }
    /**
     * Make flyout animated
     *
     * \@memberof FlyoutComponent
     * @return {?}
     */
    _enableAnimation() {
        this._defaultFlyoutClasses.push('animated');
    }
    /**
     * Handle close button click event
     *
     * \@memberof FlyoutComponent
     * @param {?} $event
     * @return {?}
     */
    onCloseButtonClick($event) {
        this._closeFlyout();
    }
    /**
     * Handle backdrop click event
     *
     * \@memberof FlyoutComponent
     * @param {?} $event
     * @return {?}
     */
    onBackdropClick($event) {
        if (this.hideOnBackdropClick) {
            this._closeFlyout();
        }
    }
}
FlyoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-flyout',
                template: `<div #backdrop (click)='onBackdropClick($event)'>
</div>
<div #flyout>
  <div class="close-btn-container" [ngClass]="showCloseButton ? '' : 'hidden'">
    <div class="close-btn" (click)='onCloseButtonClick($event)'></div>
  </div>
  <div class="flyout-content">
    <ng-content></ng-content>
  </div>
</div>
`,
                styles: [`.backdrop{position:fixed;top:0;bottom:0;left:0;right:0;background-color:#000;opacity:.5;display:none}.backdrop.open{display:block}.flyout{position:fixed;overflow:auto;background:#fff;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);will-change:transform}.flyout.left{top:0;bottom:0;left:0;height:100vh;max-width:100%}.flyout.right{top:0;bottom:0;right:0;height:100vh;max-width:100%}.flyout.top{left:0;right:0;top:0;width:100%;max-height:100vh}.flyout.bottom{left:0;right:0;bottom:0;max-height:100vh}.flyout.animated{transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.close-btn-container{text-align:right}.close-btn-container .close-btn{position:relative;display:inline-block;width:36px;height:36px;cursor:pointer}.close-btn-container .close-btn::after,.close-btn-container .close-btn::before{position:absolute;content:"";top:18px;left:6px;right:6px;width:24px;height:1px;background-color:#4b4545}.close-btn-container .close-btn::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-btn-container .close-btn::after{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.close-btn-container.hidden{display:none}`]
            },] },
];
/** @nocollapse */
FlyoutComponent.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mbHlvdXQvIiwic291cmNlcyI6WyJsaWIvZmx5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBa0JqSCxNQUFNO0lBaUhKOzs7Ozs7NEJBekdlLElBQUksWUFBWSxFQUFVOzs7Ozs7NEJBUTFCLElBQUksWUFBWSxFQUFVOzs7Ozs7MEJBUTVCLElBQUksWUFBWSxFQUFXOzs7Ozs7O3dCQVM3QixPQUFPOzs7Ozs7b0JBU1gsS0FBSzs7Ozs7OytCQVFNLElBQUk7Ozs7Ozs2QkFRTixFQUFFOzs7Ozs7NEJBUUgsSUFBSTs7Ozs7O21DQVFHLElBQUk7Ozs7OzsrQkFRUixFQUFFOzs7Ozs7cUNBc0JJLENBQUMsUUFBUSxDQUFDOzs7Ozs7dUNBT1IsQ0FBQyxVQUFVLENBQUM7S0FFckI7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7Ozs7SUFPRCxXQUFXLENBQUMsT0FBTztRQUNqQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtTQUNGO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7S0FDRjs7Ozs7OztJQU9ELHNCQUFzQjtRQUNw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TUFBTTsyQkFRTixNQUFNO3lCQVNOLEtBQUs7cUJBU0wsS0FBSztnQ0FRTCxLQUFLOzhCQVFMLEtBQUs7NkJBUUwsS0FBSztvQ0FRTCxLQUFLO2dDQVFMLEtBQUs7dUJBUUwsU0FBUyxTQUFDLFFBQVE7eUJBT2xCLFNBQVMsU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWZseW91dCcsXG4gIHRlbXBsYXRlOiBgPGRpdiAjYmFja2Ryb3AgKGNsaWNrKT0nb25CYWNrZHJvcENsaWNrKCRldmVudCknPlxuPC9kaXY+XG48ZGl2ICNmbHlvdXQ+XG4gIDxkaXYgY2xhc3M9XCJjbG9zZS1idG4tY29udGFpbmVyXCIgW25nQ2xhc3NdPVwic2hvd0Nsb3NlQnV0dG9uID8gJycgOiAnaGlkZGVuJ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1idG5cIiAoY2xpY2spPSdvbkNsb3NlQnV0dG9uQ2xpY2soJGV2ZW50KSc+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZmx5b3V0LWNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLmJhY2tkcm9we3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQtY29sb3I6IzAwMDtvcGFjaXR5Oi41O2Rpc3BsYXk6bm9uZX0uYmFja2Ryb3Aub3BlbntkaXNwbGF5OmJsb2NrfS5mbHlvdXR7cG9zaXRpb246Zml4ZWQ7b3ZlcmZsb3c6YXV0bztiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMiksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMik7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5mbHlvdXQubGVmdHt0b3A6MDtib3R0b206MDtsZWZ0OjA7aGVpZ2h0OjEwMHZoO21heC13aWR0aDoxMDAlfS5mbHlvdXQucmlnaHR7dG9wOjA7Ym90dG9tOjA7cmlnaHQ6MDtoZWlnaHQ6MTAwdmg7bWF4LXdpZHRoOjEwMCV9LmZseW91dC50b3B7bGVmdDowO3JpZ2h0OjA7dG9wOjA7d2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMHZofS5mbHlvdXQuYm90dG9te2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO21heC1oZWlnaHQ6MTAwdmh9LmZseW91dC5hbmltYXRlZHt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0LC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dH0uY2xvc2UtYnRuLWNvbnRhaW5lcnt0ZXh0LWFsaWduOnJpZ2h0fS5jbG9zZS1idG4tY29udGFpbmVyIC5jbG9zZS1idG57cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MzZweDtoZWlnaHQ6MzZweDtjdXJzb3I6cG9pbnRlcn0uY2xvc2UtYnRuLWNvbnRhaW5lciAuY2xvc2UtYnRuOjphZnRlciwuY2xvc2UtYnRuLWNvbnRhaW5lciAuY2xvc2UtYnRuOjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcIlwiO3RvcDoxOHB4O2xlZnQ6NnB4O3JpZ2h0OjZweDt3aWR0aDoyNHB4O2hlaWdodDoxcHg7YmFja2dyb3VuZC1jb2xvcjojNGI0NTQ1fS5jbG9zZS1idG4tY29udGFpbmVyIC5jbG9zZS1idG46OmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5jbG9zZS1idG4tY29udGFpbmVyIC5jbG9zZS1idG46OmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX0uY2xvc2UtYnRuLWNvbnRhaW5lci5oaWRkZW57ZGlzcGxheTpub25lfWBdXG59KVxuXG5leHBvcnQgY2xhc3MgRmx5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGZseW91dCBpcyBvcGVuZWRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZseW91dE9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGZseW91dCBpcyBjbG9zZWRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZseW91dENsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuXG4gIC8qKlxuICAgKiBVc2UgZm9yIHR3byB3YXkgZGF0YSBiaW5kaW5nIG9uIG9wZW5cbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIG9mIGxheW91dFxuICAgKiBsZWZ0LCByaWdodCwgdG9wLCBib3R0b21cbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcG9zaXRpb24gPSAncmlnaHQnO1xuXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZmx5b3V0IGlzIG9wZW4gb3Igbm90XG4gICAqIFxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBvcGVuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBjbG9zZSBidXR0b24gb3Igbm90XG4gICAqIFxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93Q2xvc2VCdXR0b24gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGNzcyBjbGFzc2VzIHRvIHN0eWxlIGZseW91dFxuICAgKiBcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZmx5b3V0Q2xhc3NlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgYmFja2Ryb3Agb3Igbm90XG4gICAqIFxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93QmFja2Ryb3AgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGNsb3NlIGZseW91dCB3aGVuIGNsaWNrZWQgb24gYmFja2Ryb3BcbiAgICogXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhpZGVPbkJhY2tkcm9wQ2xpY2sgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGNzcyBjbGFzc2VzIHRvIHN0eWxlIGJhY2tkcm9wXG4gICAqIFxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBiYWNrZHJvcENsYXNzZXMgPSBbXTtcblxuICAvKipcbiAgICogRmx5b3V0IGVsZW1lbnQgcmVmZXJlbmNlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2ZseW91dCcpIGZseW91dDogRWxlbWVudFJlZjtcblxuICAvKipcbiAgICogQmFja2Ryb3AgZWxlbWVudCByZWZlcmVuY2VcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgQFZpZXdDaGlsZCgnYmFja2Ryb3AnKSBiYWNrZHJvcDogRWxlbWVudFJlZjtcblxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGNzcyBjbGFzc2VzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCBvbiBmbHlvdXRcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgX2RlZmF1bHRGbHlvdXRDbGFzc2VzID0gWydmbHlvdXQnXTtcblxuICAvKipcbiAgICogRGVmYXVsdCBjc3MgY2xhc3NlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgb24gYmFja2Ryb3BcbiAgICpcbiAgICogQG1lbWJlcm9mIEZseW91dENvbXBvbmVudFxuICAgKi9cbiAgX2RlZmF1bHRCYWNrZHJvcENsYXNzZXMgPSBbJ2JhY2tkcm9wJ107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJVaSgpO1xuICAgIHRoaXMuX2VuYWJsZUFuaW1hdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBuZ09uQ2hhbmdlcyBldmVudFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ29wZW4nXSkge1xuICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICB0aGlzLl9vcGVuRmx5b3V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jbG9zZUZseW91dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJVaSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY3NzIGNsYXNzZXMgb24gZmx5b3V0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIF91cGRhdGVGbHlvdXRDbGFzc0xpc3QoKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gWy4uLnRoaXMuX2RlZmF1bHRGbHlvdXRDbGFzc2VzLCAuLi50aGlzLmZseW91dENsYXNzZXMsIHRoaXMucG9zaXRpb25dO1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIGNsYXNzTGlzdC5wdXNoKCdvcGVuJyk7XG4gICAgfVxuICAgIHRoaXMuZmx5b3V0Lm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NMaXN0LmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdHJhbnNwb3JtIHByb3BlcnR5IG9mIGZseW91dFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBfdXBkYXRlRmx5b3V0VHJhbnNmb3JtKCkge1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuZmx5b3V0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmx5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCBkaW1lbnNpb24gPSB7XG4gICAgICAgIGxlZnQ6IHBhcnNlSW50KGVsZW1lbnQuc3R5bGUubGVmdCwgMTApIHx8IDAsXG4gICAgICAgIHJpZ2h0OiBwYXJzZUludChlbGVtZW50LnN0eWxlLnJpZ2h0LCAxMCkgfHwgMCxcbiAgICAgICAgdG9wOiBwYXJzZUludChlbGVtZW50LnN0eWxlLnRvcCwgMTApIHx8IDAsXG4gICAgICAgIGJvdHRvbTogcGFyc2VJbnQoZWxlbWVudC5zdHlsZS5ib3R0b20sIDEwKSB8fCAwLFxuICAgICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwLFxuICAgICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDBcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgIHRoaXMuZmx5b3V0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsIC0nICsgZGltZW5zaW9uLmhlaWdodCArICdweCwgMCknO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgIHRoaXMuZmx5b3V0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBkaW1lbnNpb24uaGVpZ2h0ICsgJ3B4LCAwKSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgIHRoaXMuZmx5b3V0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKC0nICsgZGltZW5zaW9uLndpZHRoICsgJ3B4LCAwLCAwKSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5mbHlvdXQubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIGRpbWVuc2lvbi53aWR0aCArICdweCwgMCwgMCknO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY3NzIGNsYXNzZXMgb24gYmFja2Ryb3AgZWxlbWVudFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBfdXBkYXRlQmFja2Ryb3BDbGFzc0xpc3QoKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gWy4uLnRoaXMuX2RlZmF1bHRCYWNrZHJvcENsYXNzZXMsIC4uLnRoaXMuYmFja2Ryb3BDbGFzc2VzXTtcbiAgICBpZiAodGhpcy5zaG93QmFja2Ryb3AgJiYgdGhpcy5vcGVuKSB7XG4gICAgICBjbGFzc0xpc3QucHVzaCgnb3BlbicpO1xuICAgIH1cbiAgICB0aGlzLmJhY2tkcm9wLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NMaXN0LmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuL1Nob3cgZmx5b3V0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIF9vcGVuRmx5b3V0KCkge1xuICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgdGhpcy5fcmVuZGVyVWkoKTtcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xuICAgIHRoaXMuZmx5b3V0T3BlbmVkLmVtaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZS9IaWRlIGZseW91dFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBfY2xvc2VGbHlvdXQoKSB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5fcmVuZGVyVWkoKTtcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xuICAgIHRoaXMuZmx5b3V0Q2xvc2VkLmVtaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIFVJXG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIF9yZW5kZXJVaSgpIHtcbiAgICB0aGlzLl91cGRhdGVCYWNrZHJvcENsYXNzTGlzdCgpO1xuICAgIHRoaXMuX3VwZGF0ZUZseW91dENsYXNzTGlzdCgpO1xuICAgIHRoaXMuX3VwZGF0ZUZseW91dFRyYW5zZm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgZmx5b3V0IGFuaW1hdGVkXG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIF9lbmFibGVBbmltYXRpb24oKSB7XG4gICAgdGhpcy5fZGVmYXVsdEZseW91dENsYXNzZXMucHVzaCgnYW5pbWF0ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2xvc2UgYnV0dG9uIGNsaWNrIGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBGbHlvdXRDb21wb25lbnRcbiAgICovXG4gIG9uQ2xvc2VCdXR0b25DbGljaygkZXZlbnQpIHtcbiAgICB0aGlzLl9jbG9zZUZseW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBiYWNrZHJvcCBjbGljayBldmVudFxuICAgKlxuICAgKiBAbWVtYmVyb2YgRmx5b3V0Q29tcG9uZW50XG4gICAqL1xuICBvbkJhY2tkcm9wQ2xpY2soJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaGlkZU9uQmFja2Ryb3BDbGljaykge1xuICAgICAgdGhpcy5fY2xvc2VGbHlvdXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==