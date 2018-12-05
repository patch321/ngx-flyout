import { OnInit, EventEmitter, ElementRef, OnChanges } from '@angular/core';
export declare class FlyoutComponent implements OnInit, OnChanges {
    /**
     * Fired when flyout is opened
     *
     * @memberof FlyoutComponent
     */
    flyoutOpened: EventEmitter<Object>;
    /**
     * Fired when flyout is closed
     *
     * @memberof FlyoutComponent
     */
    flyoutClosed: EventEmitter<Object>;
    /**
     * Use for two way data binding on open
     *
     * @memberof FlyoutComponent
     */
    openChange: EventEmitter<boolean>;
    /**
     * Position of layout
     * left, right, top, bottom
     *
     * @memberof FlyoutComponent
     */
    position: string;
    /**
     * Whether flyout is open or not
     *
     * @memberof FlyoutComponent
     */
    open: boolean;
    /**
     * Whether to show close button or not
     *
     * @memberof FlyoutComponent
     */
    showCloseButton: boolean;
    /**
     * Additional css classes to style flyout
     *
     * @memberof FlyoutComponent
     */
    flyoutClasses: any[];
    /**
     * Whether to show backdrop or not
     *
     * @memberof FlyoutComponent
     */
    showBackdrop: boolean;
    /**
     * Whether to close flyout when clicked on backdrop
     *
     * @memberof FlyoutComponent
     */
    hideOnBackdropClick: boolean;
    /**
     * Additional css classes to style backdrop
     *
     * @memberof FlyoutComponent
     */
    backdropClasses: any[];
    /**
     * Flyout element reference
     *
     * @memberof FlyoutComponent
     */
    flyout: ElementRef;
    /**
     * Backdrop element reference
     *
     * @memberof FlyoutComponent
     */
    backdrop: ElementRef;
    /**
     * Default css classes which will be applied on flyout
     *
     * @memberof FlyoutComponent
     */
    _defaultFlyoutClasses: string[];
    /**
     * Default css classes which will be applied on backdrop
     *
     * @memberof FlyoutComponent
     */
    _defaultBackdropClasses: string[];
    constructor();
    ngOnInit(): void;
    /**
     * Handle ngOnChanges event
     *
     * @memberof FlyoutComponent
     */
    ngOnChanges(changes: any): void;
    /**
     * Update css classes on flyout
     *
     * @memberof FlyoutComponent
     */
    _updateFlyoutClassList(): void;
    /**
     * Update transporm property of flyout
     *
     * @memberof FlyoutComponent
     */
    _updateFlyoutTransform(): void;
    /**
     * Update css classes on backdrop element
     *
     * @memberof FlyoutComponent
     */
    _updateBackdropClassList(): void;
    /**
     * Open/Show flyout
     *
     * @memberof FlyoutComponent
     */
    _openFlyout(): void;
    /**
     * Close/Hide flyout
     *
     * @memberof FlyoutComponent
     */
    _closeFlyout(): void;
    /**
     * Render the UI
     *
     * @memberof FlyoutComponent
     */
    _renderUi(): void;
    /**
     * Make flyout animated
     *
     * @memberof FlyoutComponent
     */
    _enableAnimation(): void;
    /**
     * Handle close button click event
     *
     * @memberof FlyoutComponent
     */
    onCloseButtonClick($event: any): void;
    /**
     * Handle backdrop click event
     *
     * @memberof FlyoutComponent
     */
    onBackdropClick($event: any): void;
}
