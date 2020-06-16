/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';
var MatAdvancedAudioPlayerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MatAdvancedAudioPlayerComponent, _super);
    function MatAdvancedAudioPlayerComponent(playlistService) {
        var _this = _super.call(this) || this;
        _this.playlistService = playlistService;
        _this.displayedColumns = ['title', 'status'];
        _this.dataSource = new MatTableDataSource();
        _this.displayTitle = true;
        _this.displayPlaylist = true;
        _this.pageSizeOptions = [10, 20, 30];
        _this.expanded = true;
        _this.autoPlay = false;
        _this.displayVolumeControls = true;
        return _this;
    }
    /**
     * @return {?}
     */
    MatAdvancedAudioPlayerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setDataSourceAttributes();
        this.bindPlayerEvent();
        this.player.nativeElement.addEventListener('ended', (/**
         * @return {?}
         */
        function () {
            if (_this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
                _this.nextSong();
            }
        }));
        this.playlistService.setPlaylist(this.playlistData);
        this.playlistService.getSubjectCurrentTrack().subscribe((/**
         * @param {?} playlistTrack
         * @return {?}
         */
        function (playlistTrack) {
            _this.playlistTrack = playlistTrack;
        }));
        this.player.nativeElement.currentTime = 0;
        this.playlistService.init();
        if (this.autoPlay) {
            _super.prototype.play.call(this);
        }
    };
    Object.defineProperty(MatAdvancedAudioPlayerComponent.prototype, "matPaginator", {
        set: /**
         * @param {?} mp
         * @return {?}
         */
        function (mp) {
            this.paginator = mp;
            this.setDataSourceAttributes();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatAdvancedAudioPlayerComponent.prototype.setDataSourceAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = 1;
        if (this.playlistData) {
            this.playlistData.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                data.index = index++;
            }));
            this.dataSource = new MatTableDataSource(this.playlistData);
            this.dataSource.paginator = this.paginator;
        }
    };
    /**
     * @return {?}
     */
    MatAdvancedAudioPlayerComponent.prototype.nextSong = /**
     * @return {?}
     */
    function () {
        if (((this.playlistService.indexSong + 1) % this.paginator.pageSize) === 0 ||
            (this.playlistService.indexSong + 1) === this.paginator.length) {
            if (this.paginator.hasNextPage()) {
                this.paginator.nextPage();
            }
            else if (!this.paginator.hasNextPage()) {
                this.paginator.firstPage();
            }
        }
        this.currentTime = 0;
        this.duration = 0.01;
        this.playlistService.nextSong();
        this.play();
    };
    /**
     * @return {?}
     */
    MatAdvancedAudioPlayerComponent.prototype.previousSong = /**
     * @return {?}
     */
    function () {
        this.currentTime = 0;
        this.duration = 0.01;
        if (!this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
            if (((this.playlistService.indexSong) % this.paginator.pageSize) === 0 ||
                (this.playlistService.indexSong) === 0) {
                if (this.paginator.hasPreviousPage()) {
                    this.paginator.previousPage();
                }
                else if (!this.paginator.hasPreviousPage()) {
                    this.paginator.lastPage();
                }
            }
            this.playlistService.previousSong();
        }
        else {
            this.resetSong();
        }
        this.play();
    };
    /**
     * @return {?}
     */
    MatAdvancedAudioPlayerComponent.prototype.resetSong = /**
     * @return {?}
     */
    function () {
        this.player.nativeElement.src = this.playlistTrack[1].link;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MatAdvancedAudioPlayerComponent.prototype.selectTrack = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        console.log('selectTrack(index: number): void: ' + index);
        this.playlistService.selectATrack(index);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.player.nativeElement.play();
        }), 0);
    };
    /**
     * @return {?}
     */
    MatAdvancedAudioPlayerComponent.prototype.checkIfSongHasStartedSinceAtleastTwoSeconds = /**
     * @return {?}
     */
    function () {
        return this.player.nativeElement.currentTime > 2;
    };
    Object.defineProperty(MatAdvancedAudioPlayerComponent.prototype, "playlist", {
        set: /**
         * @param {?} playlist
         * @return {?}
         */
        function (playlist) {
            this.playlistData = playlist;
            this.ngOnInit();
        },
        enumerable: true,
        configurable: true
    });
    MatAdvancedAudioPlayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mat-advanced-audio-player',
                    template: "<mat-card class=\"d-flex justify-content-center ngx-advanced-audio-player\" style=\"margin: 0px;\">\n  <audio [src]=\"playlistTrack[1].link\" #audioPlayer></audio>\n\n    <button mat-button class=\"p-1\" style=\"border-left: 1px solid #ddd;\" (click)='previousSong();'\n      [disabled]=\"loaderDisplay\">\n      <fa-icon class=\"fa fa-lg\" [icon]=\"['fas','step-backward']\" aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button class=\"p-1\" (click)='playBtnHandler();'\n      style=\"border-left: 2px solid #ccc; border-right: 2px solid #ccc;\" [disabled]=\"loaderDisplay\">\n      <fa-icon *ngIf=\"loaderDisplay\" title=\"loading...\" class=\"fa fa-2x loading-track\" [pulse]=\"true\"\n        [icon]=\"['fas','spinner']\" aria-hidden=\"true\"></fa-icon>\n      <fa-icon *ngIf=\"!loaderDisplay && !isPlaying\" class=\"fa fa-2x play-track\" style=\"color:#444\" [icon]=\"['fas','play']\"\n        aria-hidden=\"true\"></fa-icon>\n      <fa-icon *ngIf=\"!loaderDisplay && isPlaying\" class=\"fa fa-2x pause-track\" style=\"color:#444\"\n        [icon]=\"['fas','pause']\" aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button class=\"p-1\" style=\"border-right: 1px solid #ddd;\" (click)='nextSong();' [disabled]=\"loaderDisplay\">\n      <fa-icon class=\"fa fa-lg next-track\" [icon]=\"['fas','step-forward']\" aria-hidden=\"true\"></fa-icon>\n    </button>\n\n  <div class=\"col\">\n    <div class=\"d-flex flex-fill justify-content-center\">\n      <div class=\"d-none d-sm-block py-3 px-1\" style=\"font-size: 12px\">\n        <span *ngIf=\"duration !== 0.01\">\n          {{currentTime | secondsToMinutes}}\n        </span>\n      </div>\n      <mat-slider class=\"d-none d-sm-block flex-fill p-1\" style=\"width: 100%\" min=\"0\" max=\"{{duration}}\" value=\"{{currentTime}}\"\n        (change)=\"currTimePosChanged($event)\"></mat-slider>\n\n      <div class=\"py-3 px-1\" style=\"font-size: 12px; text-align: right\">\n        <span *ngIf=\"duration !== 0.01\">\n          -{{duration-currentTime | secondsToMinutes }}\n        </span>\n      </div>\n    </div>\n  </div>\n  <button *ngIf=\"displayVolumeControls\" mat-button class=\"p-1\" (click)='toggleVolume();' style=\"border-left: 1px solid #ddd;\">\n    <fa-icon *ngIf=\"volume === 0\" class=\"fa fa-lg volume-mute\" [icon]=\"['fas','volume-mute']\" aria-hidden=\"true\">\n    </fa-icon>\n    <fa-icon *ngIf=\"volume > 0\" class=\"fa fa-lg volume-up\" [icon]=\"['fas','volume-up']\" aria-hidden=\"true\"></fa-icon>\n  </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle\" style=\"border: 1px solid #ddd; box-shadow: none;\">\n  <div class=\"p-1\" style=\"text-align: center;\">\n    <div style=\"padding:1px 3px;\">\n      <span *ngIf=\"!isPlaying\">{{ playlistTrack[1].title }}</span>\n      <marquee *ngIf=\"isPlaying\" behavior=\"scroll\" direction=\"left\">{{ playlistTrack[1].title }}</marquee>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n</mat-card>\n\n<mat-accordion *ngIf=\"displayPlaylist\">\n  <mat-expansion-panel [expanded]=\"expanded\">\n    <mat-expansion-panel-header>\n      Play List\n    </mat-expansion-panel-header>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\">\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef> Title </th>\n        <td mat-cell *matCellDef=\"let element\" (click)=\"selectTrack(element.index)\"> {{element.title}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div *ngIf=\"playlistTrack[1].title === element.title\">\n            <fa-icon *ngIf=\"isPlaying\" class=\"fa\" [icon]=\"['fas','play']\" [spin]=\"true\" aria-hidden=\"true\"></fa-icon>\n            <fa-icon *ngIf=\"!isPlaying\" class=\"fa\" [icon]=\"['fas','play']\" aria-hidden=\"true\"></fa-icon>\n          </div>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr class=\"mat-select-content\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\n  </mat-expansion-panel>\n</mat-accordion>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap-grid.min.css);mat-card{padding:0!important}mat-slider{max-height:30px}table{width:100%}button:focus,button:hover{outline:0!important}.ngx-advanced-audio-player{min-width:325px}"]
                }] }
    ];
    /** @nocollapse */
    MatAdvancedAudioPlayerComponent.ctorParameters = function () { return [
        { type: AudioPlayerService }
    ]; };
    MatAdvancedAudioPlayerComponent.propDecorators = {
        displayTitle: [{ type: Input }],
        displayPlaylist: [{ type: Input }],
        pageSizeOptions: [{ type: Input }],
        expanded: [{ type: Input }],
        autoPlay: [{ type: Input }],
        displayVolumeControls: [{ type: Input }],
        matPaginator: [{ type: ViewChild, args: [MatPaginator, { static: false },] }],
        playlist: [{ type: Input }]
    };
    return MatAdvancedAudioPlayerComponent;
}(BaseAudioPlayerFunctions));
export { MatAdvancedAudioPlayerComponent };
if (false) {
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.displayedColumns;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.timeLineDuration;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.dataSource;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.paginator;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.playlistData;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.displayTitle;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.displayPlaylist;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.pageSizeOptions;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.expanded;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.autoPlay;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.displayVolumeControls;
    /** @type {?} */
    MatAdvancedAudioPlayerComponent.prototype.playlistTrack;
    /**
     * @type {?}
     * @private
     */
    MatAdvancedAudioPlayerComponent.prototype.playlistService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXVkaW8tcGxheWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyL21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzdGLE9BQU8sRUFBYSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRjtJQUtxRCwyREFBd0I7SUErQnpFLHlDQUFvQixlQUFtQztRQUF2RCxZQUNJLGlCQUFPLFNBQ1Y7UUFGbUIscUJBQWUsR0FBZixlQUFlLENBQW9CO1FBN0J2RCxzQkFBZ0IsR0FBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUdqRCxnQkFBVSxHQUFHLElBQUksa0JBQWtCLEVBQVMsQ0FBQztRQU83QyxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUdwQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUd2QixxQkFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUcvQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBR2hCLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsMkJBQXFCLEdBQUcsSUFBSSxDQUFDOztJQU03QixDQUFDOzs7O0lBRUQsa0RBQVE7OztJQUFSO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FB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Q0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7Z0JBaklKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyw0dUlBQXlEOztpQkFFNUQ7Ozs7Z0JBVFEsa0JBQWtCOzs7K0JBcUJ0QixLQUFLO2tDQUdMLEtBQUs7a0NBR0wsS0FBSzsyQkFHTCxLQUFLOzJCQUdMLEtBQUs7d0NBR0wsS0FBSzsrQkE0QkwsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7MkJBa0V2QyxLQUFLOztJQUtWLHNDQUFDO0NBQUEsQUFsSUQsQ0FLcUQsd0JBQXdCLEdBNkg1RTtTQTdIWSwrQkFBK0I7OztJQUV4QywyREFBaUQ7O0lBQ2pELDJEQUE0Qjs7SUFFNUIscURBQTZDOztJQUU3QyxvREFBd0I7O0lBRXhCLHVEQUFzQjs7SUFFdEIsdURBQ29COztJQUVwQiwwREFDdUI7O0lBRXZCLDBEQUMrQjs7SUFFL0IsbURBQ2dCOztJQUVoQixtREFDaUI7O0lBRWpCLGdFQUM2Qjs7SUFFN0Isd0RBQW1COzs7OztJQUVQLDBEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdWRpb1BsYXllclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2F1ZGlvLXBsYXllci1zZXJ2aWNlL2F1ZGlvLXBsYXllci5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFNsaWRlciwgTWF0UGFnaW5hdG9yLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gJy4uLy4uL21vZGVsL3RyYWNrLm1vZGVsJztcbmltcG9ydCB7IEJhc2VBdWRpb1BsYXllckZ1bmN0aW9ucyB9IGZyb20gJy4uL2Jhc2UvYmFzZS1hdWRpby1wbGF5ZXItY29tcG9uZW50cyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdEFkdmFuY2VkQXVkaW9QbGF5ZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQXVkaW9QbGF5ZXJGdW5jdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3RpdGxlJywgJ3N0YXR1cyddO1xuICAgIHRpbWVMaW5lRHVyYXRpb246IE1hdFNsaWRlcjtcblxuICAgIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFRyYWNrPigpO1xuXG4gICAgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG5cbiAgICBwbGF5bGlzdERhdGE6IFRyYWNrW107XG5cbiAgICBASW5wdXQoKVxuICAgIGRpc3BsYXlUaXRsZSA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIGRpc3BsYXlQbGF5bGlzdCA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwXTtcblxuICAgIEBJbnB1dCgpXG4gICAgZXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBhdXRvUGxheSA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBkaXNwbGF5Vm9sdW1lQ29udHJvbHMgPSB0cnVlO1xuXG4gICAgcGxheWxpc3RUcmFjazogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF5bGlzdFNlcnZpY2U6IEF1ZGlvUGxheWVyU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNldERhdGFTb3VyY2VBdHRyaWJ1dGVzKCk7XG4gICAgICAgIHRoaXMuYmluZFBsYXllckV2ZW50KCk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0lmU29uZ0hhc1N0YXJ0ZWRTaW5jZUF0bGVhc3RUd29TZWNvbmRzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRTb25nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBsYXlsaXN0U2VydmljZS5zZXRQbGF5bGlzdCh0aGlzLnBsYXlsaXN0RGF0YSk7XG4gICAgICAgIHRoaXMucGxheWxpc3RTZXJ2aWNlLmdldFN1YmplY3RDdXJyZW50VHJhY2soKS5zdWJzY3JpYmUoKHBsYXlsaXN0VHJhY2spID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWxpc3RUcmFjayA9IHBsYXlsaXN0VHJhY2s7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wbGF5bGlzdFNlcnZpY2UuaW5pdCgpO1xuICAgICAgICBpZiAodGhpcy5hdXRvUGxheSkge1xuICAgICAgICAgICAgc3VwZXIucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHtzdGF0aWM6IGZhbHNlfSkgc2V0IG1hdFBhZ2luYXRvcihtcDogTWF0UGFnaW5hdG9yKSB7XG4gICAgICAgIHRoaXMucGFnaW5hdG9yID0gbXA7XG4gICAgICAgIHRoaXMuc2V0RGF0YVNvdXJjZUF0dHJpYnV0ZXMoKTtcbiAgICB9XG5cbiAgICBzZXREYXRhU291cmNlQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcbiAgICAgICAgaWYgKHRoaXMucGxheWxpc3REYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlsaXN0RGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFRyYWNrPih0aGlzLnBsYXlsaXN0RGF0YSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0U29uZygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCgodGhpcy5wbGF5bGlzdFNlcnZpY2UuaW5kZXhTb25nICsgMSkgJSB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZSkgPT09IDAgfHxcbiAgICAgICAgICAgICh0aGlzLnBsYXlsaXN0U2VydmljZS5pbmRleFNvbmcgKyAxKSA9PT0gdGhpcy5wYWdpbmF0b3IubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdpbmF0b3IuaGFzTmV4dFBhZ2UoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLm5leHRQYWdlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnBhZ2luYXRvci5oYXNOZXh0UGFnZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjAxO1xuICAgICAgICB0aGlzLnBsYXlsaXN0U2VydmljZS5uZXh0U29uZygpO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBwcmV2aW91c1NvbmcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4wMTtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSWZTb25nSGFzU3RhcnRlZFNpbmNlQXRsZWFzdFR3b1NlY29uZHMoKSkge1xuICAgICAgICAgICAgaWYgKCgodGhpcy5wbGF5bGlzdFNlcnZpY2UuaW5kZXhTb25nKSAlIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKSA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnBsYXlsaXN0U2VydmljZS5pbmRleFNvbmcpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5hdG9yLmhhc1ByZXZpb3VzUGFnZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLnByZXZpb3VzUGFnZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGFnaW5hdG9yLmhhc1ByZXZpb3VzUGFnZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLmxhc3RQYWdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5bGlzdFNlcnZpY2UucHJldmlvdXNTb25nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U29uZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIHJlc2V0U29uZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLnBsYXlsaXN0VHJhY2tbMV0ubGluaztcbiAgICB9XG5cbiAgICBzZWxlY3RUcmFjayhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RUcmFjayhpbmRleDogbnVtYmVyKTogdm9pZDogJyArIGluZGV4KTtcbiAgICAgICAgdGhpcy5wbGF5bGlzdFNlcnZpY2Uuc2VsZWN0QVRyYWNrKGluZGV4KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnBsYXkoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgY2hlY2tJZlNvbmdIYXNTdGFydGVkU2luY2VBdGxlYXN0VHdvU2Vjb25kcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWUgPiAyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHBsYXlsaXN0KHBsYXlsaXN0OiBUcmFja1tdKSB7XG4gICAgICAgIHRoaXMucGxheWxpc3REYXRhID0gcGxheWxpc3Q7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG59XG4iXX0=
