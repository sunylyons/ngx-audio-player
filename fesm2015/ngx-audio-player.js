import { Injectable, ViewChild, Component, Input, Pipe, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { MatTableDataSource, MatPaginator, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule, MatSliderModule, MatExpansionModule, MatPaginatorModule } from '@angular/material';

import { MatTableDataSource,  MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';

import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faSpinner, faStepForward, faStepBackward, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AudioPlayerService {
    constructor() {
        this.playlist = [];
        this.indexSong = 0;
        this.currentTrack = new BehaviorSubject(this.playlist[this.indexSong]);
        this.currentTime = 0;
        this.duration = 0;
    }
    /**
     * @return {?}
     */
    init() {
        this.updateCurrentSong();
    }
    /**
     * @return {?}
     */
    nextSong() {
        if ((this.indexSong + 1) >= this.playlist.length) {
            this.indexSong = 0;
        }
        else {
            this.indexSong++;
        }
        this.updateCurrentSong();
    }
    /**
     * @return {?}
     */
    previousSong() {
        if ((this.indexSong - 1) < 0) {
            this.indexSong = (this.playlist.length - 1);
        }
        else {
            this.indexSong--;
        }
        this.updateCurrentSong();
    }
    /**
     * @return {?}
     */
    resetPlaylist() {
        this.indexSong = 0;
        this.updateCurrentSong();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectATrack(index) {
        this.indexSong = index - 1;
        this.updateCurrentSong();
    }
    /**
     * @return {?}
     */
    updateCurrentSong() {
        /** @type {?} */
        const current = this.playlist[this.indexSong];
        /** @type {?} */
        const previous = ((this.indexSong - 1) >= 0) ? this.playlist[this.indexSong - 1] : this.playlist[this.playlist.length - 1];
        /** @type {?} */
        const next = ((this.indexSong + 1) >= this.playlist.length) ? this.playlist[0] : this.playlist[this.indexSong + 1];
        this.currentTrack.next([
            previous,
            current,
            next
        ]);
    }
    /**
     * @return {?}
     */
    getSubjectCurrentTrack() {
        return this.currentTrack;
    }
    /**
     * @return {?}
     */
    getPlaylist() {
        return this.playlist;
    }
    /**
     * @param {?} playlist
     * @return {?}
     */
    setPlaylist(playlist) {
        this.playlist = playlist;
    }
    /**
     * @return {?}
     */
    getIndexSong() {
        return this.indexSong;
    }
}
AudioPlayerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AudioPlayerService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseAudioPlayerFunctions {
    constructor() {
        this.loaderDisplay = false;
        this.isPlaying = false;
        this.currentTime = 0;
        this.volume = 0.1;
        this.duration = 0.01;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    currTimePosChanged(event) {
        this.player.nativeElement.currentTime = event.value;
    }
    /**
     * @return {?}
     */
    bindPlayerEvent() {
        this.player.nativeElement.addEventListener('playing', (/**
         * @return {?}
         */
        (event) => {
	        
            this.isPlaying = true;
            this.duration = Math.floor(this.player.nativeElement.duration);
            setInterval(()=>{
	            let player = event.target;
	            if(player.currentTime > 0){
		        	this.loaderDisplay = false;
	            }
				//console.log('time', player.currentTime);
            }, 500);
            
        }));
        this.player.nativeElement.addEventListener('pause', (/**
         * @return {?}
         */
        () => {
	        this.loaderDisplay = false;
            this.isPlaying = false;
        }));
        this.player.nativeElement.addEventListener('timeupdate', (/**
         * @return {?}
         */
        () => {
            this.currentTime = Math.floor(this.player.nativeElement.currentTime);
            
        }));
        this.player.nativeElement.addEventListener('volume', (/**
         * @return {?}
         */
        () => {
            this.volume = Math.floor(this.player.nativeElement.volume);
        }));
        this.player.nativeElement.addEventListener('loadstart', (/**
         * @return {?}
         */
        () => {
            this.loaderDisplay = true;
        }));
        this.player.nativeElement.addEventListener('loadeddata', (/**
         * @return {?}
         */
        () => {
            //this.loaderDisplay = false;
            this.duration = Math.floor(this.player.nativeElement.duration);
        }));
    }
    /**
     * @return {?}
     */
    playBtnHandler() {
        if (this.loaderDisplay) {
            return;
        }
        if (this.player.nativeElement.paused) {
            this.player.nativeElement.play(this.currentTime);
        }
        else {
            this.currentTime = this.player.nativeElement.currentTime;
            this.player.nativeElement.pause();
        }
    }
    /**
     * @return {?}
     */
    play() {
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
    toggleVolume() {
        if (this.volume === 0) {
            this.setVolume(1.0);
        }
        else {
            this.setVolume(0);
        }
    }
    /**
     * @private
     * @param {?} vol
     * @return {?}
     */
    setVolume(vol) {
        this.volume = vol;
        this.player.nativeElement.volume = this.volume;
    }
}
BaseAudioPlayerFunctions.propDecorators = {
    player: [{ type: ViewChild, args: ['audioPlayer', { static: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatAdvancedAudioPlayerComponent extends BaseAudioPlayerFunctions {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatBasicAudioPlayerComponent extends BaseAudioPlayerFunctions {
    constructor() {
        super();
        this.displayTitle = false;
        this.autoPlay = false;
        this.displayVolumeControls = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.bindPlayerEvent();
        if (this.autoPlay) {
            super.play();
        }
    }
    /**
     * @return {?}
     */
    resetSong() {
        this.player.nativeElement.src = this.audioUrl;
    }
}
MatBasicAudioPlayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-basic-audio-player',
                template: "<mat-card class=\"d-flex ngx-basic-audio-player\">\n    <audio [src]=\"audioUrl\" #audioPlayer id=\"audioPlayer\"></audio>\n    <button mat-button id=\"backward\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','backward']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button (click)='playBtnHandler();' class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\" [disabled]=\"loaderDisplay\">\n        <fa-icon *ngIf=\"loaderDisplay\" title=\"loading...\" class=\"fa fa-lg loading-track\" [pulse]=\"true\"\n            [icon]=\"['fas','spinner']\" aria-hidden=\"true\"></fa-icon>\n        <fa-icon *ngIf=\"!loaderDisplay && !isPlaying\" class=\"fa fa-lg play-track\" [icon]=\"['fas','play']\"\n            aria-hidden=\"true\"></fa-icon>\n        <fa-icon *ngIf=\"!loaderDisplay && isPlaying\" class=\"fa fa-lg pause-track\" [icon]=\"['fas','pause']\"\n            aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button id=\"forward\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','forward']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<div class=\"flex-fill pl-1 ngx-basic-audio-player-slider\">\n        <mat-slider style=\"width: 100%\" min=\"0\" max=\"{{duration}}\" value=\"{{currentTime}}\"\n            (change)=\"currTimePosChanged($event)\"></mat-slider>\n    </div>\n    <div class=\"d-flex ngx-basic-audio-player-duration\">\n        <span *ngIf=\"duration !== 0.01\" class=\"pl-2 pr-3 my-auto\" style=\"font-size: 14px!important;\">\n            -{{duration-currentTime |\n            secondsToMinutes }}\n        </span>\n    </div>\n    <button *ngIf=\"displayVolumeControls\" mat-button (click)='toggleVolume();'\n        style=\"padding: 0px!important; min-width:48px!important;\">\n        <fa-icon *ngIf=\"volume === 0\" class=\"fa fa-lg volume-mute\" [icon]=\"['fas','volume-mute']\" aria-hidden=\"true\">\n        </fa-icon>\n        <fa-icon *ngIf=\"volume > 0\" class=\"fa fa-lg volume-up\" [icon]=\"['fas','volume-up']\" aria-hidden=\"true\">\n        </fa-icon>\n    </button>\n<button mat-button id=\"speed\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','tachometer-alt']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button id=\"audioOpen\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','book-open']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button id=\"audioClose\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','times']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle && title !== ''\" style=\"border-top: 1px solid #ddd;\">\n    <div style=\"text-align: center;\">\n        <div style=\"padding:1px 3px;\">\n            {{ title }}\n        </div>\n    </div>\n</mat-card>",
                styles: ["mat-card,mat-slider{padding:0!important}button:focus,button:hover{outline:0!important}.ngx-basic-audio-player{min-width:200px}"]
            }] }
];
/** @nocollapse */
MatBasicAudioPlayerComponent.ctorParameters = () => [];
MatBasicAudioPlayerComponent.propDecorators = {
    title: [{ type: Input }],
    audioUrl: [{ type: Input }],
    displayTitle: [{ type: Input }],
    autoPlay: [{ type: Input }],
    displayVolumeControls: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Transform seconds to minutes:seconds
 * Example : 270 -> 02:30
*/
class SecondsToMinutesPipe {
    /**
     * @param {?} time
     * @return {?}
     */
    transform(time) {
        /** @type {?} */
        const minutes = ('0' + Math.floor(time / 60)).slice(-2);
        /** @type {?} */
        const seconds = ('0' + time % 60).slice(-2);
        return `${minutes}:${seconds}`;
    }
}
SecondsToMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'secondsToMinutes' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
                    MatSliderModule, MatExpansionModule, MatPaginatorModule
                ]
            },] }
];
class NgxAudioPlayerModule {
    constructor() {
        // Icons for User Favorite Page
        library.add(faPlay, faPause, faSpinner, faStepForward, faStepBackward, faVolumeMute, faVolumeUp);
    }
}
NgxAudioPlayerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MatBasicAudioPlayerComponent, SecondsToMinutesPipe, MatAdvancedAudioPlayerComponent],
                imports: [CommonModule, FormsModule, FontAwesomeModule, MaterialModule],
                exports: [MatBasicAudioPlayerComponent, MatAdvancedAudioPlayerComponent],
                providers: [AudioPlayerService]
            },] }
];
/** @nocollapse */
NgxAudioPlayerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Track {
}

export { MatAdvancedAudioPlayerComponent, MatBasicAudioPlayerComponent, MaterialModule, NgxAudioPlayerModule, Track, BaseAudioPlayerFunctions as ɵa, AudioPlayerService as ɵb, SecondsToMinutesPipe as ɵc };
//# sourceMappingURL=ngx-audio-player.js.map
