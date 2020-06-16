/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';
export class MatAdvancedAudioPlayerComponent extends BaseAudioPlayerFunctions {
    /**
     * @param {?} playlistService
     */
    constructor(playlistService) {
        super();
        this.playlistService = playlistService;
        this.displayedColumns = ['title', 'status'];
        this.dataSource = new MatTableDataSource();
        this.displayTitle = true;
        this.displayPlaylist = true;
        this.pageSizeOptions = [10, 20, 30];
        this.expanded = true;
        this.autoPlay = false;
        this.displayVolumeControls = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setDataSourceAttributes();
        this.bindPlayerEvent();
        this.player.nativeElement.addEventListener('ended', (/**
         * @return {?}
         */
        () => {
            if (this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
                this.nextSong();
            }
        }));
        this.playlistService.setPlaylist(this.playlistData);
        this.playlistService.getSubjectCurrentTrack().subscribe((/**
         * @param {?} playlistTrack
         * @return {?}
         */
        (playlistTrack) => {
            this.playlistTrack = playlistTrack;
        }));
        this.player.nativeElement.currentTime = 0;
        this.playlistService.init();
        if (this.autoPlay) {
            super.play();
        }
    }
    /**
     * @param {?} mp
     * @return {?}
     */
    set matPaginator(mp) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }
    /**
     * @return {?}
     */
    setDataSourceAttributes() {
        /** @type {?} */
        let index = 1;
        if (this.playlistData) {
            this.playlistData.forEach((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                data.index = index++;
            }));
            this.dataSource = new MatTableDataSource(this.playlistData);
            this.dataSource.paginator = this.paginator;
        }
    }
    /**
     * @return {?}
     */
    nextSong() {
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
    }
    /**
     * @return {?}
     */
    previousSong() {
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
    }
    /**
     * @return {?}
     */
    resetSong() {
        this.player.nativeElement.src = this.playlistTrack[1].link;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectTrack(index) {
        console.log('selectTrack(index: number): void: ' + index);
        this.playlistService.selectATrack(index);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.player.nativeElement.play();
        }), 0);
    }
    /**
     * @return {?}
     */
    checkIfSongHasStartedSinceAtleastTwoSeconds() {
        return this.player.nativeElement.currentTime > 2;
    }
    /**
     * @param {?} playlist
     * @return {?}
     */
    set playlist(playlist) {
        this.playlistData = playlist;
        this.ngOnInit();
    }
}
MatAdvancedAudioPlayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-advanced-audio-player',
                template: "<mat-card class=\"d-flex justify-content-center ngx-advanced-audio-player\" style=\"margin: 0px;\">\n  <audio [src]=\"playlistTrack[1].link\" #audioPlayer></audio>\n\n    <button mat-button class=\"p-1\" style=\"border-left: 1px solid #ddd;\" (click)='previousSong();'\n      [disabled]=\"loaderDisplay\">\n      <fa-icon class=\"fa fa-lg\" [icon]=\"['fas','step-backward']\" aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button class=\"p-1\" (click)='playBtnHandler();'\n      style=\"border-left: 2px solid #ccc; border-right: 2px solid #ccc;\" [disabled]=\"loaderDisplay\">\n      <fa-icon *ngIf=\"loaderDisplay\" title=\"loading...\" class=\"fa fa-2x loading-track\" [pulse]=\"true\"\n        [icon]=\"['fas','spinner']\" aria-hidden=\"true\"></fa-icon>\n      <fa-icon *ngIf=\"!loaderDisplay && !isPlaying\" class=\"fa fa-2x play-track\" style=\"color:#444\" [icon]=\"['fas','play']\"\n        aria-hidden=\"true\"></fa-icon>\n      <fa-icon *ngIf=\"!loaderDisplay && isPlaying\" class=\"fa fa-2x pause-track\" style=\"color:#444\"\n        [icon]=\"['fas','pause']\" aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button class=\"p-1\" style=\"border-right: 1px solid #ddd;\" (click)='nextSong();' [disabled]=\"loaderDisplay\">\n      <fa-icon class=\"fa fa-lg next-track\" [icon]=\"['fas','step-forward']\" aria-hidden=\"true\"></fa-icon>\n    </button>\n\n  <div class=\"col\">\n    <div class=\"d-flex flex-fill justify-content-center\">\n      <div class=\"d-none d-sm-block py-3 px-1\" style=\"font-size: 12px\">\n        <span *ngIf=\"duration !== 0.01\">\n          {{currentTime | secondsToMinutes}}\n        </span>\n      </div>\n      <mat-slider class=\"d-none d-sm-block flex-fill p-1\" style=\"width: 100%\" min=\"0\" max=\"{{duration}}\" value=\"{{currentTime}}\"\n        (change)=\"currTimePosChanged($event)\"></mat-slider>\n\n      <div class=\"py-3 px-1\" style=\"font-size: 12px; text-align: right\">\n        <span *ngIf=\"duration !== 0.01\">\n          -{{duration-currentTime | secondsToMinutes }}\n        </span>\n      </div>\n    </div>\n  </div>\n  <button *ngIf=\"displayVolumeControls\" mat-button class=\"p-1\" (click)='toggleVolume();' style=\"border-left: 1px solid #ddd;\">\n    <fa-icon *ngIf=\"volume === 0\" class=\"fa fa-lg volume-mute\" [icon]=\"['fas','volume-mute']\" aria-hidden=\"true\">\n    </fa-icon>\n    <fa-icon *ngIf=\"volume > 0\" class=\"fa fa-lg volume-up\" [icon]=\"['fas','volume-up']\" aria-hidden=\"true\"></fa-icon>\n  </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle\" style=\"border: 1px solid #ddd; box-shadow: none;\">\n  <div class=\"p-1\" style=\"text-align: center;\">\n    <div style=\"padding:1px 3px;\">\n      <span *ngIf=\"!isPlaying\">{{ playlistTrack[1].title }}</span>\n      <marquee *ngIf=\"isPlaying\" behavior=\"scroll\" direction=\"left\">{{ playlistTrack[1].title }}</marquee>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n</mat-card>\n\n<mat-accordion *ngIf=\"displayPlaylist\">\n  <mat-expansion-panel [expanded]=\"expanded\">\n    <mat-expansion-panel-header>\n      Play List\n    </mat-expansion-panel-header>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\">\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef> Title </th>\n        <td mat-cell *matCellDef=\"let element\" (click)=\"selectTrack(element.index)\"> {{element.title}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div *ngIf=\"playlistTrack[1].title === element.title\">\n            <fa-icon *ngIf=\"isPlaying\" class=\"fa\" [icon]=\"['fas','play']\" [spin]=\"true\" aria-hidden=\"true\"></fa-icon>\n            <fa-icon *ngIf=\"!isPlaying\" class=\"fa\" [icon]=\"['fas','play']\" aria-hidden=\"true\"></fa-icon>\n          </div>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr class=\"mat-select-content\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\n  </mat-expansion-panel>\n</mat-accordion>",
                styles: ["mat-card{padding:0!important}mat-slider{max-height:30px}table{width:100%}button:focus,button:hover{outline:0!important}.ngx-advanced-audio-player{min-width:325px}"]
            }] }
];
/** @nocollapse */
MatAdvancedAudioPlayerComponent.ctorParameters = () => [
    { type: AudioPlayerService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXVkaW8tcGxheWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyL21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDN0YsT0FBTyxFQUFhLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBT2hGLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSx3QkFBd0I7Ozs7SUErQnpFLFlBQW9CLGVBQW1DO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBRFEsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBN0J2RCxxQkFBZ0IsR0FBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUdqRCxlQUFVLEdBQUcsSUFBSSxrQkFBa0IsRUFBUyxDQUFDO1FBTzdDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBR3BCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBR3ZCLG9CQUFlLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRy9CLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFHaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQiwwQkFBcUIsR0FBRyxJQUFJLENBQUM7SUFNN0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIs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QUNQLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLDR1SUFBeUQ7O2FBRTVEOzs7O1lBVFEsa0JBQWtCOzs7MkJBcUJ0QixLQUFLOzhCQUdMLEtBQUs7OEJBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7b0NBR0wsS0FBSzsyQkE0QkwsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7dUJBa0V2QyxLQUFLOzs7O0lBdEhOLDJEQUFpRDs7SUFDakQsMkRBQTRCOztJQUU1QixxREFBNkM7O0lBRTdDLG9EQUF3Qjs7SUFFeEIsdURBQXNCOztJQUV0Qix1REFDb0I7O0lBRXBCLDBEQUN1Qjs7SUFFdkIsMERBQytCOztJQUUvQixtREFDZ0I7O0lBRWhCLG1EQUNpQjs7SUFFakIsZ0VBQzZCOztJQUU3Qix3REFBbUI7Ozs7O0lBRVAsMERBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1ZGlvUGxheWVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYXVkaW8tcGxheWVyLXNlcnZpY2UvYXVkaW8tcGxheWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0U2xpZGVyLCBNYXRQYWdpbmF0b3IsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSAnLi4vLi4vbW9kZWwvdHJhY2subW9kZWwnO1xuaW1wb3J0IHsgQmFzZUF1ZGlvUGxheWVyRnVuY3Rpb25zIH0gZnJvbSAnLi4vYmFzZS9iYXNlLWF1ZGlvLXBsYXllci1jb21wb25lbnRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0QWR2YW5jZWRBdWRpb1BsYXllckNvbXBvbmVudCBleHRlbmRzIEJhc2VBdWRpb1BsYXllckZ1bmN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsndGl0bGUnLCAnc3RhdHVzJ107XG4gICAgdGltZUxpbmVEdXJhdGlvbjogTWF0U2xpZGVyO1xuXG4gICAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8VHJhY2s+KCk7XG5cbiAgICBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcblxuICAgIHBsYXlsaXN0RGF0YTogVHJhY2tbXTtcblxuICAgIEBJbnB1dCgpXG4gICAgZGlzcGxheVRpdGxlID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgZGlzcGxheVBsYXlsaXN0ID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzBdO1xuXG4gICAgQElucHV0KClcbiAgICBleHBhbmRlZCA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIGF1dG9QbGF5ID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIGRpc3BsYXlWb2x1bWVDb250cm9scyA9IHRydWU7XG5cbiAgICBwbGF5bGlzdFRyYWNrOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXlsaXN0U2VydmljZTogQXVkaW9QbGF5ZXJTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YVNvdXJjZUF0dHJpYnV0ZXMoKTtcbiAgICAgICAgdGhpcy5iaW5kUGxheWVyRXZlbnQoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSWZTb25nSGFzU3RhcnRlZFNpbmNlQXRsZWFzdFR3b1NlY29uZHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFNvbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWxpc3RTZXJ2aWNlLnNldFBsYXlsaXN0KHRoaXMucGxheWxpc3REYXRhKTtcbiAgICAgICAgdGhpcy5wbGF5bGlzdFNlcnZpY2UuZ2V0U3ViamVjdEN1cnJlbnRUcmFjaygpLnN1YnNjcmliZSgocGxheWxpc3RUcmFjaykgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5bGlzdFRyYWNrID0gcGxheWxpc3RUcmFjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnBsYXlsaXN0U2VydmljZS5pbml0KCk7XG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGF5KSB7XG4gICAgICAgICAgICBzdXBlci5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvciwge3N0YXRpYzogZmFsc2V9KSBzZXQgbWF0UGFnaW5hdG9yKG1wOiBNYXRQYWdpbmF0b3IpIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0b3IgPSBtcDtcbiAgICAgICAgdGhpcy5zZXREYXRhU291cmNlQXR0cmlidXRlcygpO1xuICAgIH1cblxuICAgIHNldERhdGFTb3VyY2VBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgaW5kZXggPSAxO1xuICAgICAgICBpZiAodGhpcy5wbGF5bGlzdERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWxpc3REYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8VHJhY2s+KHRoaXMucGxheWxpc3REYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5leHRTb25nKCk6IHZvaWQge1xuICAgICAgICBpZiAoKCh0aGlzLnBsYXlsaXN0U2VydmljZS5pbmRleFNvbmcgKyAxKSAlIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKSA9PT0gMCB8fFxuICAgICAgICAgICAgKHRoaXMucGxheWxpc3RTZXJ2aWNlLmluZGV4U29uZyArIDEpID09PSB0aGlzLnBhZ2luYXRvci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvci5oYXNOZXh0UGFnZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IubmV4dFBhZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGFnaW5hdG9yLmhhc05leHRQYWdlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMDE7XG4gICAgICAgIHRoaXMucGxheWxpc3RTZXJ2aWNlLm5leHRTb25nKCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIHByZXZpb3VzU29uZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjAxO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJZlNvbmdIYXNTdGFydGVkU2luY2VBdGxlYXN0VHdvU2Vjb25kcygpKSB7XG4gICAgICAgICAgICBpZiAoKCh0aGlzLnBsYXlsaXN0U2VydmljZS5pbmRleFNvbmcpICUgdGhpcy5wYWdpbmF0b3IucGFnZVNpemUpID09PSAwIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMucGxheWxpc3RTZXJ2aWNlLmluZGV4U29uZykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdpbmF0b3IuaGFzUHJldmlvdXNQYWdlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IucHJldmlvdXNQYWdlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wYWdpbmF0b3IuaGFzUHJldmlvdXNQYWdlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IubGFzdFBhZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYXlsaXN0U2VydmljZS5wcmV2aW91c1NvbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTb25nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgcmVzZXRTb25nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMucGxheWxpc3RUcmFja1sxXS5saW5rO1xuICAgIH1cblxuICAgIHNlbGVjdFRyYWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdFRyYWNrKGluZGV4OiBudW1iZXIpOiB2b2lkOiAnICsgaW5kZXgpO1xuICAgICAgICB0aGlzLnBsYXlsaXN0U2VydmljZS5zZWxlY3RBVHJhY2soaW5kZXgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQucGxheSgpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBjaGVja0lmU29uZ0hhc1N0YXJ0ZWRTaW5jZUF0bGVhc3RUd29TZWNvbmRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA+IDI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgcGxheWxpc3QocGxheWxpc3Q6IFRyYWNrW10pIHtcbiAgICAgICAgdGhpcy5wbGF5bGlzdERhdGEgPSBwbGF5bGlzdDtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbn1cbiJdfQ==
