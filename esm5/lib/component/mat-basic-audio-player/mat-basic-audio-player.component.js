/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';
var MatBasicAudioPlayerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MatBasicAudioPlayerComponent, _super);
    function MatBasicAudioPlayerComponent() {
        var _this = _super.call(this) || this;
        _this.displayTitle = false;
        _this.autoPlay = false;
        _this.displayVolumeControls = true;
        return _this;
    }
    /**
     * @return {?}
     */
    MatBasicAudioPlayerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.bindPlayerEvent();
        if (this.autoPlay) {
            _super.prototype.play.call(this);
        }
    };
    /**
     * @return {?}
     */
    MatBasicAudioPlayerComponent.prototype.resetSong = /**
     * @return {?}
     */
    function () {
        this.player.nativeElement.src = this.audioUrl;
    };
    MatBasicAudioPlayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mat-basic-audio-player',
                    template: "<mat-card class=\"d-flex ngx-basic-audio-player\">\n    <audio [src]=\"audioUrl\" #audioPlayer id=\"audioPlayer\"></audio>\n    <button mat-button id=\"backward\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','backward']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button (click)='playBtnHandler();' class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\" [disabled]=\"loaderDisplay\">\n        <fa-icon *ngIf=\"loaderDisplay\" title=\"loading...\" class=\"fa fa-lg loading-track\" [pulse]=\"true\"\n            [icon]=\"['fas','spinner']\" aria-hidden=\"true\"></fa-icon>\n        <fa-icon *ngIf=\"!loaderDisplay && !isPlaying\" class=\"fa fa-lg play-track\" [icon]=\"['fas','play']\"\n            aria-hidden=\"true\"></fa-icon>\n        <fa-icon *ngIf=\"!loaderDisplay && isPlaying\" class=\"fa fa-lg pause-track\" [icon]=\"['fas','pause']\"\n            aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button id=\"forward\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','forward']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<div class=\"flex-fill pl-1 ngx-basic-audio-player-slider\">\n        <mat-slider style=\"width: 100%\" min=\"0\" max=\"{{duration}}\" value=\"{{currentTime}}\"\n            (change)=\"currTimePosChanged($event)\"></mat-slider>\n    </div>\n    <div class=\"d-flex ngx-basic-audio-player-duration\">\n        <span *ngIf=\"duration !== 0.01\" class=\"pl-2 pr-3 my-auto\" style=\"font-size: 14px!important;\">\n            -{{duration-currentTime |\n            secondsToMinutes }}\n        </span>\n    </div>\n    <button *ngIf=\"displayVolumeControls\" mat-button (click)='toggleVolume();'\n        style=\"padding: 0px!important; min-width:48px!important;\">\n        <fa-icon *ngIf=\"volume === 0\" class=\"fa fa-lg volume-mute\" [icon]=\"['fas','volume-mute']\" aria-hidden=\"true\">\n        </fa-icon>\n        <fa-icon *ngIf=\"volume > 0\" class=\"fa fa-lg volume-up\" [icon]=\"['fas','volume-up']\" aria-hidden=\"true\">\n        </fa-icon>\n    </button>\n<button mat-button id=\"speed\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','tachometer-alt']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button id=\"audioOpen\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','book-open']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button id=\"audioClose\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','times']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle && title !== ''\" style=\"border-top: 1px solid #ddd;\">\n    <div style=\"text-align: center;\">\n        <div style=\"padding:1px 3px;\">\n            {{ title }}\n        </div>\n    </div>\n</mat-card>",
                    styles: ["mat-card,mat-slider{padding:0!important}button:focus,button:hover{outline:0!important}.ngx-basic-audio-player{min-width:300px}"]
                }] }
    ];
    /** @nocollapse */
    MatBasicAudioPlayerComponent.ctorParameters = function () { return []; };
    MatBasicAudioPlayerComponent.propDecorators = {
        title: [{ type: Input }],
        audioUrl: [{ type: Input }],
        displayTitle: [{ type: Input }],
        autoPlay: [{ type: Input }],
        displayVolumeControls: [{ type: Input }]
    };
    return MatBasicAudioPlayerComponent;
}(BaseAudioPlayerFunctions));
export { MatBasicAudioPlayerComponent };
if (false) {
    /** @type {?} */
    MatBasicAudioPlayerComponent.prototype.title;
    /** @type {?} */
    MatBasicAudioPlayerComponent.prototype.audioUrl;
    /** @type {?} */
    MatBasicAudioPlayerComponent.prototype.displayTitle;
    /** @type {?} */
    MatBasicAudioPlayerComponent.prototype.autoPlay;
    /** @type {?} */
    MatBasicAudioPlayerComponent.prototype.displayVolumeControls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWJhc2ljLWF1ZGlvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXVkaW8tcGxheWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tYXQtYmFzaWMtYXVkaW8tcGxheWVyL21hdC1iYXNpYy1hdWRpby1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEY7SUFLa0Qsd0RBQXdCO0lBaUJ0RTtRQUFBLFlBQ0ksaUJBQU8sU0FDVjtRQVZELGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBR3JCLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsMkJBQXFCLEdBQUcsSUFBSSxDQUFDOztJQUk3QixDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLGlCQUFNLElBQUksV0FBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQzs7OztJQUVELGdEQUFTOzs7SUFBVDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xELENBQUM7O2dCQW5DSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsaS9EQUFzRDs7aUJBRXpEOzs7Ozt3QkFHSSxLQUFLOzJCQUdMLEtBQUs7K0JBR0wsS0FBSzsyQkFHTCxLQUFLO3dDQUdMLEtBQUs7O0lBa0JWLG1DQUFDO0NBQUEsQUFyQ0QsQ0FLa0Qsd0JBQXdCLEdBZ0N6RTtTQWhDWSw0QkFBNEI7OztJQUVyQyw2Q0FDYzs7SUFFZCxnREFDaUI7O0lBRWpCLG9EQUNxQjs7SUFFckIsZ0RBQ2lCOztJQUVqQiw2REFDNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VBdWRpb1BsYXllckZ1bmN0aW9ucyB9IGZyb20gJy4uL2Jhc2UvYmFzZS1hdWRpby1wbGF5ZXItY29tcG9uZW50cyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWF0LWJhc2ljLWF1ZGlvLXBsYXllcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21hdC1iYXNpYy1hdWRpby1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21hdC1iYXNpYy1hdWRpby1wbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdEJhc2ljQXVkaW9QbGF5ZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQXVkaW9QbGF5ZXJGdW5jdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICB0aXRsZTogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBhdWRpb1VybDogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBkaXNwbGF5VGl0bGUgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpXG4gICAgYXV0b1BsYXkgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpXG4gICAgZGlzcGxheVZvbHVtZUNvbnRyb2xzID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJpbmRQbGF5ZXJFdmVudCgpO1xuICAgICAgICBpZiAodGhpcy5hdXRvUGxheSkge1xuICAgICAgICAgICAgc3VwZXIucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRTb25nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMuYXVkaW9Vcmw7XG4gICAgfVxuXG59XG4iXX0=