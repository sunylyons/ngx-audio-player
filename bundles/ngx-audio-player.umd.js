(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/material'), require('@angular/common'), require('@fortawesome/angular-fontawesome'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-audio-player', ['exports', '@angular/core', 'rxjs', '@angular/material', '@angular/common', '@fortawesome/angular-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@angular/forms'], factory) :
    (global = global || self, factory(global['ngx-audio-player'] = {}, global.ng.core, global.rxjs, global.ng.material, global.ng.common, global['@fortawesome/angular-fontawesome'], global['@fortawesome/fontawesome-svg-core'], global['@fortawesome/free-solid-svg-icons'], global.ng.forms));
}(this, function (exports, core, rxjs, material, common, angularFontawesome, fontawesomeSvgCore, freeSolidSvgIcons, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AudioPlayerService = /** @class */ (function () {
        function AudioPlayerService() {
            this.playlist = [];
            this.indexSong = 0;
            this.currentTrack = new rxjs.BehaviorSubject(this.playlist[this.indexSong]);
            this.currentTime = 0;
            this.duration = 0;
        }
        /**
         * @return {?}
         */
        AudioPlayerService.prototype.init = /**
         * @return {?}
         */
        function () {
            this.updateCurrentSong();
        };
        /**
         * @return {?}
         */
        AudioPlayerService.prototype.nextSong = /**
         * @return {?}
         */
        function () {
            if ((this.indexSong + 1) >= this.playlist.length) {
                this.indexSong = 0;
            }
            else {
                this.indexSong++;
            }
            this.updateCurrentSong();
        };
        /**
         * @return {?}
         */
        AudioPlayerService.prototype.previousSong = /**
         * @return {?}
         */
        function () {
            if ((this.indexSong - 1) < 0) {
                this.indexSong = (this.playlist.length - 1);
            }
            else {
                this.indexSong--;
            }
            this.updateCurrentSong();
        };
        /**
         * @return {?}
         */
        AudioPlayerService.prototype.resetPlaylist = /**
         * @return {?}
         */
        function () {
            this.indexSong = 0;
            this.updateCurrentSong();
        };
        /**
         * @param {?} index
         * @return {?}
         */
        AudioPlayerService.prototype.selectATrack = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.indexSong = index - 1;
            this.updateCurrentSong();
        };
        /**
         * @return {?}
         */
        AudioPlayerService.prototype.updateCurrentSong = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var current = this.playlist[this.indexSong];
            /** @type {?} */
            var previous = ((this.indexSong - 1) >= 0) ? this.playlist[this.indexSong - 1] : this.playlist[this.playlist.length - 1];
            /** @type {?} */
            var next = ((this.indexSong + 1) >= this.playlist.length) ? this.playlist[0] : this.playlist[this.indexSong + 1];
            this.currentTrack.next([
                previous,
                current,
                next
            ]);
        };
        /**
         * @return {?}
         */
        AudioPlayerService.prototype.getSubjectCurrentTrack = /**
         * @return {?}
         */
        function () {
            return this.currentTrack;
        };
        /**
         * @return {?}
         */
        AudioPlayerService.prototype.getPlaylist = /**
         * @return {?}
         */
        function () {
            return this.playlist;
        };
        /**
         * @param {?} playlist
         * @return {?}
         */
        AudioPlayerService.prototype.setPlaylist = /**
         * @param {?} playlist
         * @return {?}
         */
        function (playlist) {
            this.playlist = playlist;
        };
        /**
         * @return {?}
         */
        AudioPlayerService.prototype.getIndexSong = /**
         * @return {?}
         */
        function () {
            return this.indexSong;
        };
        AudioPlayerService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AudioPlayerService.ctorParameters = function () { return []; };
        return AudioPlayerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseAudioPlayerFunctions = /** @class */ (function () {
        function BaseAudioPlayerFunctions() {
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
        BaseAudioPlayerFunctions.prototype.currTimePosChanged = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.player.nativeElement.currentTime = event.value;
        };
        /**
         * @return {?}
         */
        BaseAudioPlayerFunctions.prototype.bindPlayerEvent = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.player.nativeElement.addEventListener('playing', (/**
             * @return {?}
             */
            function () {
                _this.isPlaying = true;
                _this.duration = Math.floor(_this.player.nativeElement.duration);
            }));
            this.player.nativeElement.addEventListener('pause', (/**
             * @return {?}
             */
            function () {
                _this.isPlaying = false;
            }));
            this.player.nativeElement.addEventListener('timeupdate', (/**
             * @return {?}
             */
            function () {
                _this.currentTime = Math.floor(_this.player.nativeElement.currentTime);
            }));
            this.player.nativeElement.addEventListener('volume', (/**
             * @return {?}
             */
            function () {
                _this.volume = Math.floor(_this.player.nativeElement.volume);
            }));
            this.player.nativeElement.addEventListener('loadstart', (/**
             * @return {?}
             */
            function () {
                _this.loaderDisplay = true;
            }));
            this.player.nativeElement.addEventListener('loadeddata', (/**
             * @return {?}
             */
            function () {
                _this.loaderDisplay = false;
                _this.duration = Math.floor(_this.player.nativeElement.duration);
            }));
        };
        /**
         * @return {?}
         */
        BaseAudioPlayerFunctions.prototype.playBtnHandler = /**
         * @return {?}
         */
        function () {
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
        };
        /**
         * @return {?}
         */
        BaseAudioPlayerFunctions.prototype.play = /**
         * @return {?}
         */
        function () {
            var _this = this;
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
        BaseAudioPlayerFunctions.prototype.toggleVolume = /**
         * @return {?}
         */
        function () {
            if (this.volume === 0) {
                this.setVolume(1.0);
            }
            else {
                this.setVolume(0);
            }
        };
        /**
         * @private
         * @param {?} vol
         * @return {?}
         */
        BaseAudioPlayerFunctions.prototype.setVolume = /**
         * @private
         * @param {?} vol
         * @return {?}
         */
        function (vol) {
            this.volume = vol;
            this.player.nativeElement.volume = this.volume;
        };
        BaseAudioPlayerFunctions.propDecorators = {
            player: [{ type: core.ViewChild, args: ['audioPlayer', { static: true },] }]
        };
        return BaseAudioPlayerFunctions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatAdvancedAudioPlayerComponent = /** @class */ (function (_super) {
        __extends(MatAdvancedAudioPlayerComponent, _super);
        function MatAdvancedAudioPlayerComponent(playlistService) {
            var _this = _super.call(this) || this;
            _this.playlistService = playlistService;
            _this.displayedColumns = ['title', 'status'];
            _this.dataSource = new material.MatTableDataSource();
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
                this.dataSource = new material.MatTableDataSource(this.playlistData);
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
            { type: core.Component, args: [{
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
            displayTitle: [{ type: core.Input }],
            displayPlaylist: [{ type: core.Input }],
            pageSizeOptions: [{ type: core.Input }],
            expanded: [{ type: core.Input }],
            autoPlay: [{ type: core.Input }],
            displayVolumeControls: [{ type: core.Input }],
            matPaginator: [{ type: core.ViewChild, args: [material.MatPaginator, { static: false },] }],
            playlist: [{ type: core.Input }]
        };
        return MatAdvancedAudioPlayerComponent;
    }(BaseAudioPlayerFunctions));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatBasicAudioPlayerComponent = /** @class */ (function (_super) {
        __extends(MatBasicAudioPlayerComponent, _super);
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
            { type: core.Component, args: [{
                        selector: 'mat-basic-audio-player',
                        template: "<mat-card class=\"d-flex ngx-basic-audio-player\">\n    <audio [src]=\"audioUrl\" #audioPlayer id=\"audioPlayer\"></audio>\n    <button mat-button id=\"backward\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','backward']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button (click)='playBtnHandler();' class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\" [disabled]=\"loaderDisplay\">\n        <fa-icon *ngIf=\"loaderDisplay\" title=\"loading...\" class=\"fa fa-lg loading-track\" [pulse]=\"true\"\n            [icon]=\"['fas','spinner']\" aria-hidden=\"true\"></fa-icon>\n        <fa-icon *ngIf=\"!loaderDisplay && !isPlaying\" class=\"fa fa-lg play-track\" [icon]=\"['fas','play']\"\n            aria-hidden=\"true\"></fa-icon>\n        <fa-icon *ngIf=\"!loaderDisplay && isPlaying\" class=\"fa fa-lg pause-track\" [icon]=\"['fas','pause']\"\n            aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button id=\"forward\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','forward']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<div class=\"flex-fill pl-1 ngx-basic-audio-player-slider\">\n        <mat-slider style=\"width: 100%\" min=\"0\" max=\"{{duration}}\" value=\"{{currentTime}}\"\n            (change)=\"currTimePosChanged($event)\"></mat-slider>\n    </div>\n    <div class=\"d-flex ngx-basic-audio-player-duration\">\n        <span *ngIf=\"duration !== 0.01\" class=\"pl-2 pr-3 my-auto\" style=\"font-size: 14px!important;\">\n            -{{duration-currentTime |\n            secondsToMinutes }}\n        </span>\n    </div>\n    <button *ngIf=\"displayVolumeControls\" mat-button (click)='toggleVolume();'\n        style=\"padding: 0px!important; min-width:48px!important;\">\n        <fa-icon *ngIf=\"volume === 0\" class=\"fa fa-lg volume-mute\" [icon]=\"['fas','volume-mute']\" aria-hidden=\"true\">\n        </fa-icon>\n        <fa-icon *ngIf=\"volume > 0\" class=\"fa fa-lg volume-up\" [icon]=\"['fas','volume-up']\" aria-hidden=\"true\">\n        </fa-icon>\n    </button>\n<button mat-button id=\"speed\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','tachometer-alt']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button id=\"audioOpen\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','book-open']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button id=\"audioClose\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','times']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle && title !== ''\" style=\"border-top: 1px solid #ddd;\">\n    <div style=\"text-align: center;\">\n        <div style=\"padding:1px 3px;\">\n            {{ title }}\n        </div>\n    </div>\n</mat-card>",
                        styles: ["mat-card,mat-slider{padding:0!important}button:focus,button:hover{outline:0!important}.ngx-basic-audio-player{min-width:300px}"]
                    }] }
        ];
        /** @nocollapse */
        MatBasicAudioPlayerComponent.ctorParameters = function () { return []; };
        MatBasicAudioPlayerComponent.propDecorators = {
            title: [{ type: core.Input }],
            audioUrl: [{ type: core.Input }],
            displayTitle: [{ type: core.Input }],
            autoPlay: [{ type: core.Input }],
            displayVolumeControls: [{ type: core.Input }]
        };
        return MatBasicAudioPlayerComponent;
    }(BaseAudioPlayerFunctions));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
     * Transform seconds to minutes:seconds
     * Example : 270 -> 02:30
    */
    var SecondsToMinutesPipe = /** @class */ (function () {
        function SecondsToMinutesPipe() {
        }
        /**
         * @param {?} time
         * @return {?}
         */
        SecondsToMinutesPipe.prototype.transform = /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            /** @type {?} */
            var minutes = ('0' + Math.floor(time / 60)).slice(-2);
            /** @type {?} */
            var seconds = ('0' + time % 60).slice(-2);
            return minutes + ":" + seconds;
        };
        SecondsToMinutesPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'secondsToMinutes' },] }
        ];
        return SecondsToMinutesPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [
                            material.MatButtonModule, material.MatCardModule, material.MatTableModule, material.MatFormFieldModule,
                            material.MatSliderModule, material.MatExpansionModule, material.MatPaginatorModule
                        ]
                    },] }
        ];
        return MaterialModule;
    }());
    var NgxAudioPlayerModule = /** @class */ (function () {
        function NgxAudioPlayerModule() {
            // Icons for User Favorite Page
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.faPlay, freeSolidSvgIcons.faPause, freeSolidSvgIcons.faSpinner, freeSolidSvgIcons.faStepForward, freeSolidSvgIcons.faStepBackward, freeSolidSvgIcons.faVolumeMute, freeSolidSvgIcons.faVolumeUp);
        }
        NgxAudioPlayerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MatBasicAudioPlayerComponent, SecondsToMinutesPipe, MatAdvancedAudioPlayerComponent],
                        imports: [common.CommonModule, forms.FormsModule, angularFontawesome.FontAwesomeModule, MaterialModule],
                        exports: [MatBasicAudioPlayerComponent, MatAdvancedAudioPlayerComponent],
                        providers: [AudioPlayerService]
                    },] }
        ];
        /** @nocollapse */
        NgxAudioPlayerModule.ctorParameters = function () { return []; };
        return NgxAudioPlayerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Track = /** @class */ (function () {
        function Track() {
        }
        return Track;
    }());

    exports.MatAdvancedAudioPlayerComponent = MatAdvancedAudioPlayerComponent;
    exports.MatBasicAudioPlayerComponent = MatBasicAudioPlayerComponent;
    exports.MaterialModule = MaterialModule;
    exports.NgxAudioPlayerModule = NgxAudioPlayerModule;
    exports.Track = Track;
    exports.ɵa = BaseAudioPlayerFunctions;
    exports.ɵb = AudioPlayerService;
    exports.ɵc = SecondsToMinutesPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-audio-player.umd.js.map
