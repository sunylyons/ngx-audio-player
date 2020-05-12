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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/card';
import * as ɵngcc2 from '@angular/material/button';
import * as ɵngcc3 from '@fortawesome/angular-fontawesome';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from '@angular/material/slider';
import * as ɵngcc6 from '@angular/material/expansion';
import * as ɵngcc7 from '@angular/material/table';
import * as ɵngcc8 from '@angular/material/paginator';

const _c0 = ["audioPlayer"];
const _c1 = function () { return ["fas", "spinner"]; };
function MatAdvancedAudioPlayerComponent_fa_icon_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 19);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("pulse", true)("icon", ɵngcc0.ɵɵpureFunction0(2, _c1));
} }
const _c2 = function () { return ["fas", "play"]; };
function MatAdvancedAudioPlayerComponent_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 20);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(1, _c2));
} }
const _c3 = function () { return ["fas", "pause"]; };
function MatAdvancedAudioPlayerComponent_fa_icon_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 21);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(1, _c3));
} }
function MatAdvancedAudioPlayerComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "secondsToMinutes");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r4.currentTime), " ");
} }
function MatAdvancedAudioPlayerComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "secondsToMinutes");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" -", ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r5.duration - ctx_r5.currentTime), " ");
} }
const _c4 = function () { return ["fas", "volume-mute"]; };
function MatAdvancedAudioPlayerComponent_button_18_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 25);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(1, _c4));
} }
const _c5 = function () { return ["fas", "volume-up"]; };
function MatAdvancedAudioPlayerComponent_button_18_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 26);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(1, _c5));
} }
function MatAdvancedAudioPlayerComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 22);
    ɵngcc0.ɵɵlistener("click", function MatAdvancedAudioPlayerComponent_button_18_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.toggleVolume(); });
    ɵngcc0.ɵɵtemplate(1, MatAdvancedAudioPlayerComponent_button_18_fa_icon_1_Template, 1, 2, "fa-icon", 23);
    ɵngcc0.ɵɵtemplate(2, MatAdvancedAudioPlayerComponent_button_18_fa_icon_2_Template, 1, 2, "fa-icon", 24);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.volume === 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.volume > 0);
} }
function MatAdvancedAudioPlayerComponent_mat_card_19_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r13.playlistTrack[1].title);
} }
function MatAdvancedAudioPlayerComponent_mat_card_19_marquee_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "marquee", 32);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r14.playlistTrack[1].title);
} }
function MatAdvancedAudioPlayerComponent_mat_card_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-card", 27);
    ɵngcc0.ɵɵelementStart(1, "div", 28);
    ɵngcc0.ɵɵelementStart(2, "div", 29);
    ɵngcc0.ɵɵtemplate(3, MatAdvancedAudioPlayerComponent_mat_card_19_span_3_Template, 2, 1, "span", 14);
    ɵngcc0.ɵɵtemplate(4, MatAdvancedAudioPlayerComponent_mat_card_19_marquee_4_Template, 2, 1, "marquee", 30);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(5, "div", 31);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r7.isPlaying);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.isPlaying);
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 43);
    ɵngcc0.ɵɵtext(1, " Title ");
    ɵngcc0.ɵɵelementEnd();
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 44);
    ɵngcc0.ɵɵlistener("click", function MatAdvancedAudioPlayerComponent_mat_accordion_20_td_7_Template_td_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r23); const element_r21 = ctx.$implicit; const ctx_r22 = ɵngcc0.ɵɵnextContext(2); return ctx_r22.selectTrack(element_r21.index); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", element_r21.title, " ");
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_th_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "th", 43);
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_td_10_div_1_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 48);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(2, _c2))("spin", true);
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_td_10_div_1_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 49);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(1, _c2));
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_td_10_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, MatAdvancedAudioPlayerComponent_mat_accordion_20_td_10_div_1_fa_icon_1_Template, 1, 3, "fa-icon", 46);
    ɵngcc0.ɵɵtemplate(2, MatAdvancedAudioPlayerComponent_mat_accordion_20_td_10_div_1_fa_icon_2_Template, 1, 2, "fa-icon", 47);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r25.isPlaying);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r25.isPlaying);
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_td_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 45);
    ɵngcc0.ɵɵtemplate(1, MatAdvancedAudioPlayerComponent_mat_accordion_20_td_10_div_1_Template, 3, 2, "div", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r18.playlistTrack[1].title === element_r24.title);
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_tr_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 50);
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_tr_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 51);
} }
function MatAdvancedAudioPlayerComponent_mat_accordion_20_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-accordion");
    ɵngcc0.ɵɵelementStart(1, "mat-expansion-panel", 33);
    ɵngcc0.ɵɵelementStart(2, "mat-expansion-panel-header");
    ɵngcc0.ɵɵtext(3, " Play List ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "table", 34);
    ɵngcc0.ɵɵelementContainerStart(5, 35);
    ɵngcc0.ɵɵtemplate(6, MatAdvancedAudioPlayerComponent_mat_accordion_20_th_6_Template, 2, 0, "th", 36);
    ɵngcc0.ɵɵtemplate(7, MatAdvancedAudioPlayerComponent_mat_accordion_20_td_7_Template, 2, 1, "td", 37);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementContainerStart(8, 38);
    ɵngcc0.ɵɵtemplate(9, MatAdvancedAudioPlayerComponent_mat_accordion_20_th_9_Template, 1, 0, "th", 36);
    ɵngcc0.ɵɵtemplate(10, MatAdvancedAudioPlayerComponent_mat_accordion_20_td_10_Template, 2, 1, "td", 39);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵtemplate(11, MatAdvancedAudioPlayerComponent_mat_accordion_20_tr_11_Template, 1, 0, "tr", 40);
    ɵngcc0.ɵɵtemplate(12, MatAdvancedAudioPlayerComponent_mat_accordion_20_tr_12_Template, 1, 0, "tr", 41);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(13, "mat-paginator", 42);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("expanded", ctx_r8.expanded);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("dataSource", ctx_r8.dataSource);
    ɵngcc0.ɵɵadvance(7);
    ɵngcc0.ɵɵproperty("matHeaderRowDef", ctx_r8.displayedColumns);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matRowDefColumns", ctx_r8.displayedColumns);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pageSizeOptions", ctx_r8.pageSizeOptions);
} }
const _c6 = function () { return ["fas", "step-backward"]; };
const _c7 = function () { return ["fas", "step-forward"]; };
function MatBasicAudioPlayerComponent_fa_icon_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 19);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("pulse", true)("icon", ɵngcc0.ɵɵpureFunction0(2, _c1));
} }
function MatBasicAudioPlayerComponent_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 4);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(1, _c2));
} }
function MatBasicAudioPlayerComponent_fa_icon_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 20);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(1, _c3));
} }
function MatBasicAudioPlayerComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "secondsToMinutes");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" -", ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r4.duration - ctx_r4.currentTime), " ");
} }
function MatBasicAudioPlayerComponent_button_15_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 25);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(1, _c4));
} }
function MatBasicAudioPlayerComponent_button_15_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "fa-icon", 26);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(1, _c5));
} }
function MatBasicAudioPlayerComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 22);
    ɵngcc0.ɵɵlistener("click", function MatBasicAudioPlayerComponent_button_15_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.toggleVolume(); });
    ɵngcc0.ɵɵtemplate(1, MatBasicAudioPlayerComponent_button_15_fa_icon_1_Template, 1, 2, "fa-icon", 23);
    ɵngcc0.ɵɵtemplate(2, MatBasicAudioPlayerComponent_button_15_fa_icon_2_Template, 1, 2, "fa-icon", 24);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.volume === 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.volume > 0);
} }
function MatBasicAudioPlayerComponent_mat_card_22_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-card", 27);
    ɵngcc0.ɵɵelementStart(1, "div", 28);
    ɵngcc0.ɵɵelementStart(2, "div", 29);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.title, " ");
} }
const _c8 = function () { return ["fas", "backward"]; };
const _c9 = function () { return ["fas", "forward"]; };
const _c10 = function () { return ["fas", "tachometer-alt"]; };
const _c11 = function () { return ["fas", "book-open"]; };
const _c12 = function () { return ["fas", "times"]; };
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
AudioPlayerService.ɵfac = function AudioPlayerService_Factory(t) { return new (t || AudioPlayerService)(); };
AudioPlayerService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AudioPlayerService, factory: AudioPlayerService.ɵfac });
/** @nocollapse */
AudioPlayerService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AudioPlayerService, [{
        type: Injectable
    }], function () { return []; }, null); })();

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
BaseAudioPlayerFunctions.ɵfac = function BaseAudioPlayerFunctions_Factory(t) { return new (t || BaseAudioPlayerFunctions)(); };
BaseAudioPlayerFunctions.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BaseAudioPlayerFunctions, viewQuery: function BaseAudioPlayerFunctions_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.player = _t.first);
    } } });
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
MatAdvancedAudioPlayerComponent.ɵfac = function MatAdvancedAudioPlayerComponent_Factory(t) { return new (t || MatAdvancedAudioPlayerComponent)(ɵngcc0.ɵɵdirectiveInject(AudioPlayerService)); };
MatAdvancedAudioPlayerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatAdvancedAudioPlayerComponent, selectors: [["mat-advanced-audio-player"]], viewQuery: function MatAdvancedAudioPlayerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatPaginator, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.matPaginator = _t.first);
    } }, inputs: { displayTitle: "displayTitle", displayPlaylist: "displayPlaylist", pageSizeOptions: "pageSizeOptions", expanded: "expanded", autoPlay: "autoPlay", displayVolumeControls: "displayVolumeControls", playlist: "playlist" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 21, vars: 18, consts: [[1, "d-flex", "justify-content-center", "ngx-advanced-audio-player", 2, "margin", "0px"], [3, "src"], ["audioPlayer", ""], ["mat-button", "", 1, "p-1", 2, "border-left", "1px solid #ddd", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-lg", 3, "icon"], ["mat-button", "", 1, "p-1", 2, "border-left", "2px solid #ccc", "border-right", "2px solid #ccc", 3, "disabled", "click"], ["title", "loading...", "class", "fa fa-2x loading-track", "aria-hidden", "true", 3, "pulse", "icon", 4, "ngIf"], ["class", "fa fa-2x play-track", "style", "color:#444", "aria-hidden", "true", 3, "icon", 4, "ngIf"], ["class", "fa fa-2x pause-track", "style", "color:#444", "aria-hidden", "true", 3, "icon", 4, "ngIf"], ["mat-button", "", 1, "p-1", 2, "border-right", "1px solid #ddd", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-lg", "next-track", 3, "icon"], [1, "col"], [1, "d-flex", "flex-fill", "justify-content-center"], [1, "d-none", "d-sm-block", "py-3", "px-1", 2, "font-size", "12px"], [4, "ngIf"], ["min", "0", 1, "d-none", "d-sm-block", "flex-fill", "p-1", 2, "width", "100%", 3, "max", "value", "change"], [1, "py-3", "px-1", 2, "font-size", "12px", "text-align", "right"], ["mat-button", "", "class", "p-1", "style", "border-left: 1px solid #ddd;", 3, "click", 4, "ngIf"], ["style", "border: 1px solid #ddd; box-shadow: none;", 4, "ngIf"], ["title", "loading...", "aria-hidden", "true", 1, "fa", "fa-2x", "loading-track", 3, "pulse", "icon"], ["aria-hidden", "true", 1, "fa", "fa-2x", "play-track", 2, "color", "#444", 3, "icon"], ["aria-hidden", "true", 1, "fa", "fa-2x", "pause-track", 2, "color", "#444", 3, "icon"], ["mat-button", "", 1, "p-1", 2, "border-left", "1px solid #ddd", 3, "click"], ["class", "fa fa-lg volume-mute", "aria-hidden", "true", 3, "icon", 4, "ngIf"], ["class", "fa fa-lg volume-up", "aria-hidden", "true", 3, "icon", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-lg", "volume-mute", 3, "icon"], ["aria-hidden", "true", 1, "fa", "fa-lg", "volume-up", 3, "icon"], [2, "border", "1px solid #ddd", "box-shadow", "none"], [1, "p-1", 2, "text-align", "center"], [2, "padding", "1px 3px"], ["behavior", "scroll", "direction", "left", 4, "ngIf"], [1, "clear"], ["behavior", "scroll", "direction", "left"], [3, "expanded"], ["mat-table", "", 1, "mat-elevation-z6", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "mat-select-content", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["mat-cell", ""], ["class", "fa", "aria-hidden", "true", 3, "icon", "spin", 4, "ngIf"], ["class", "fa", "aria-hidden", "true", 3, "icon", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", 3, "icon", "spin"], ["aria-hidden", "true", 1, "fa", 3, "icon"], ["mat-header-row", ""], ["mat-row", "", 1, "mat-select-content"]], template: function MatAdvancedAudioPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-card", 0);
        ɵngcc0.ɵɵelement(1, "audio", 1, 2);
        ɵngcc0.ɵɵelementStart(3, "button", 3);
        ɵngcc0.ɵɵlistener("click", function MatAdvancedAudioPlayerComponent_Template_button_click_3_listener() { return ctx.previousSong(); });
        ɵngcc0.ɵɵelement(4, "fa-icon", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "button", 5);
        ɵngcc0.ɵɵlistener("click", function MatAdvancedAudioPlayerComponent_Template_button_click_5_listener() { return ctx.playBtnHandler(); });
        ɵngcc0.ɵɵtemplate(6, MatAdvancedAudioPlayerComponent_fa_icon_6_Template, 1, 3, "fa-icon", 6);
        ɵngcc0.ɵɵtemplate(7, MatAdvancedAudioPlayerComponent_fa_icon_7_Template, 1, 2, "fa-icon", 7);
        ɵngcc0.ɵɵtemplate(8, MatAdvancedAudioPlayerComponent_fa_icon_8_Template, 1, 2, "fa-icon", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "button", 9);
        ɵngcc0.ɵɵlistener("click", function MatAdvancedAudioPlayerComponent_Template_button_click_9_listener() { return ctx.nextSong(); });
        ɵngcc0.ɵɵelement(10, "fa-icon", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 11);
        ɵngcc0.ɵɵelementStart(12, "div", 12);
        ɵngcc0.ɵɵelementStart(13, "div", 13);
        ɵngcc0.ɵɵtemplate(14, MatAdvancedAudioPlayerComponent_span_14_Template, 3, 3, "span", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "mat-slider", 15);
        ɵngcc0.ɵɵlistener("change", function MatAdvancedAudioPlayerComponent_Template_mat_slider_change_15_listener($event) { return ctx.currTimePosChanged($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "div", 16);
        ɵngcc0.ɵɵtemplate(17, MatAdvancedAudioPlayerComponent_span_17_Template, 3, 3, "span", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(18, MatAdvancedAudioPlayerComponent_button_18_Template, 3, 2, "button", 17);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(19, MatAdvancedAudioPlayerComponent_mat_card_19_Template, 6, 2, "mat-card", 18);
        ɵngcc0.ɵɵtemplate(20, MatAdvancedAudioPlayerComponent_mat_accordion_20_Template, 14, 5, "mat-accordion", 14);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.playlistTrack[1].link, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ctx.loaderDisplay);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(16, _c6));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.loaderDisplay);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loaderDisplay);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.loaderDisplay && !ctx.isPlaying);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.loaderDisplay && ctx.isPlaying);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.loaderDisplay);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(17, _c7));
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.duration !== 0.01);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("max", ctx.duration);
        ɵngcc0.ɵɵpropertyInterpolate("value", ctx.currentTime);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.duration !== 0.01);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.displayVolumeControls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.displayTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.displayPlaylist);
    } }, directives: function () { return [ɵngcc1.MatCard, ɵngcc2.MatButton, ɵngcc3.FaIconComponent, ɵngcc4.NgIf, ɵngcc5.MatSlider, ɵngcc6.MatAccordion, ɵngcc6.MatExpansionPanel, ɵngcc6.MatExpansionPanelHeader, ɵngcc7.MatTable, ɵngcc7.MatColumnDef, ɵngcc7.MatHeaderCellDef, ɵngcc7.MatCellDef, ɵngcc7.MatHeaderRowDef, ɵngcc7.MatRowDef, ɵngcc8.MatPaginator, ɵngcc7.MatHeaderCell, ɵngcc7.MatCell, ɵngcc7.MatHeaderRow, ɵngcc7.MatRow]; }, pipes: function () { return [SecondsToMinutesPipe]; }, styles: ["mat-card[_ngcontent-%COMP%]{padding:0!important}mat-slider[_ngcontent-%COMP%]{max-height:30px}table[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:hover{outline:0!important}.ngx-advanced-audio-player[_ngcontent-%COMP%]{min-width:325px}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatAdvancedAudioPlayerComponent, [{
        type: Component,
        args: [{
                selector: 'mat-advanced-audio-player',
                template: "<mat-card class=\"d-flex justify-content-center ngx-advanced-audio-player\" style=\"margin: 0px;\">\n  <audio [src]=\"playlistTrack[1].link\" #audioPlayer></audio>\n\n    <button mat-button class=\"p-1\" style=\"border-left: 1px solid #ddd;\" (click)='previousSong();'\n      [disabled]=\"loaderDisplay\">\n      <fa-icon class=\"fa fa-lg\" [icon]=\"['fas','step-backward']\" aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button class=\"p-1\" (click)='playBtnHandler();'\n      style=\"border-left: 2px solid #ccc; border-right: 2px solid #ccc;\" [disabled]=\"loaderDisplay\">\n      <fa-icon *ngIf=\"loaderDisplay\" title=\"loading...\" class=\"fa fa-2x loading-track\" [pulse]=\"true\"\n        [icon]=\"['fas','spinner']\" aria-hidden=\"true\"></fa-icon>\n      <fa-icon *ngIf=\"!loaderDisplay && !isPlaying\" class=\"fa fa-2x play-track\" style=\"color:#444\" [icon]=\"['fas','play']\"\n        aria-hidden=\"true\"></fa-icon>\n      <fa-icon *ngIf=\"!loaderDisplay && isPlaying\" class=\"fa fa-2x pause-track\" style=\"color:#444\"\n        [icon]=\"['fas','pause']\" aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button class=\"p-1\" style=\"border-right: 1px solid #ddd;\" (click)='nextSong();' [disabled]=\"loaderDisplay\">\n      <fa-icon class=\"fa fa-lg next-track\" [icon]=\"['fas','step-forward']\" aria-hidden=\"true\"></fa-icon>\n    </button>\n\n  <div class=\"col\">\n    <div class=\"d-flex flex-fill justify-content-center\">\n      <div class=\"d-none d-sm-block py-3 px-1\" style=\"font-size: 12px\">\n        <span *ngIf=\"duration !== 0.01\">\n          {{currentTime | secondsToMinutes}}\n        </span>\n      </div>\n      <mat-slider class=\"d-none d-sm-block flex-fill p-1\" style=\"width: 100%\" min=\"0\" max=\"{{duration}}\" value=\"{{currentTime}}\"\n        (change)=\"currTimePosChanged($event)\"></mat-slider>\n\n      <div class=\"py-3 px-1\" style=\"font-size: 12px; text-align: right\">\n        <span *ngIf=\"duration !== 0.01\">\n          -{{duration-currentTime | secondsToMinutes }}\n        </span>\n      </div>\n    </div>\n  </div>\n  <button *ngIf=\"displayVolumeControls\" mat-button class=\"p-1\" (click)='toggleVolume();' style=\"border-left: 1px solid #ddd;\">\n    <fa-icon *ngIf=\"volume === 0\" class=\"fa fa-lg volume-mute\" [icon]=\"['fas','volume-mute']\" aria-hidden=\"true\">\n    </fa-icon>\n    <fa-icon *ngIf=\"volume > 0\" class=\"fa fa-lg volume-up\" [icon]=\"['fas','volume-up']\" aria-hidden=\"true\"></fa-icon>\n  </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle\" style=\"border: 1px solid #ddd; box-shadow: none;\">\n  <div class=\"p-1\" style=\"text-align: center;\">\n    <div style=\"padding:1px 3px;\">\n      <span *ngIf=\"!isPlaying\">{{ playlistTrack[1].title }}</span>\n      <marquee *ngIf=\"isPlaying\" behavior=\"scroll\" direction=\"left\">{{ playlistTrack[1].title }}</marquee>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n</mat-card>\n\n<mat-accordion *ngIf=\"displayPlaylist\">\n  <mat-expansion-panel [expanded]=\"expanded\">\n    <mat-expansion-panel-header>\n      Play List\n    </mat-expansion-panel-header>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\">\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef> Title </th>\n        <td mat-cell *matCellDef=\"let element\" (click)=\"selectTrack(element.index)\"> {{element.title}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div *ngIf=\"playlistTrack[1].title === element.title\">\n            <fa-icon *ngIf=\"isPlaying\" class=\"fa\" [icon]=\"['fas','play']\" [spin]=\"true\" aria-hidden=\"true\"></fa-icon>\n            <fa-icon *ngIf=\"!isPlaying\" class=\"fa\" [icon]=\"['fas','play']\" aria-hidden=\"true\"></fa-icon>\n          </div>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr class=\"mat-select-content\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\n  </mat-expansion-panel>\n</mat-accordion>",
                styles: ["mat-card{padding:0!important}mat-slider{max-height:30px}table{width:100%}button:focus,button:hover{outline:0!important}.ngx-advanced-audio-player{min-width:325px}"]
            }]
    }], function () { return [{ type: AudioPlayerService }]; }, { displayTitle: [{
            type: Input
        }], displayPlaylist: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], expanded: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], displayVolumeControls: [{
            type: Input
        }], matPaginator: [{
            type: ViewChild,
            args: [MatPaginator, { static: false }]
        }], playlist: [{
            type: Input
        }] }); })();

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
MatBasicAudioPlayerComponent.ɵfac = function MatBasicAudioPlayerComponent_Factory(t) { return new (t || MatBasicAudioPlayerComponent)(); };
MatBasicAudioPlayerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatBasicAudioPlayerComponent, selectors: [["mat-basic-audio-player"]], inputs: { displayTitle: "displayTitle", autoPlay: "autoPlay", displayVolumeControls: "displayVolumeControls", title: "title", audioUrl: "audioUrl" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 23, vars: 20, consts: [[1, "d-flex", "ngx-basic-audio-player"], ["id", "audioPlayer", 3, "src"], ["audioPlayer", ""], ["mat-button", "", "id", "backward", 1, "ngx-basic-audio-player-button-handler", 2, "font-size", "14px!important"], ["aria-hidden", "true", 1, "fa", "fa-lg", "play-track", 3, "icon"], ["mat-button", "", 1, "ngx-basic-audio-player-button-handler", 2, "font-size", "14px!important", 3, "disabled", "click"], ["title", "loading...", "class", "fa fa-lg loading-track", "aria-hidden", "true", 3, "pulse", "icon", 4, "ngIf"], ["class", "fa fa-lg play-track", "aria-hidden", "true", 3, "icon", 4, "ngIf"], ["class", "fa fa-lg pause-track", "aria-hidden", "true", 3, "icon", 4, "ngIf"], ["mat-button", "", "id", "forward", 1, "ngx-basic-audio-player-button-handler", 2, "font-size", "14px!important"], [1, "flex-fill", "pl-1", "ngx-basic-audio-player-slider"], ["min", "0", 2, "width", "100%", 3, "max", "value", "change"], [1, "d-flex", "ngx-basic-audio-player-duration"], ["class", "pl-2 pr-3 my-auto", "style", "font-size: 14px!important;", 4, "ngIf"], ["mat-button", "", "style", "padding: 0px!important; min-width:48px!important;", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "speed", 1, "ngx-basic-audio-player-button-handler", 2, "font-size", "14px!important"], ["mat-button", "", "id", "audioOpen", 1, "ngx-basic-audio-player-button-handler", 2, "font-size", "14px!important"], ["mat-button", "", "id", "audioClose", 1, "ngx-basic-audio-player-button-handler", 2, "font-size", "14px!important"], ["style", "border-top: 1px solid #ddd;", 4, "ngIf"], ["title", "loading...", "aria-hidden", "true", 1, "fa", "fa-lg", "loading-track", 3, "pulse", "icon"], ["aria-hidden", "true", 1, "fa", "fa-lg", "pause-track", 3, "icon"], [1, "pl-2", "pr-3", "my-auto", 2, "font-size", "14px!important"], ["mat-button", "", 2, "padding", "0px!important", "min-width", "48px!important", 3, "click"], ["class", "fa fa-lg volume-mute", "aria-hidden", "true", 3, "icon", 4, "ngIf"], ["class", "fa fa-lg volume-up", "aria-hidden", "true", 3, "icon", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-lg", "volume-mute", 3, "icon"], ["aria-hidden", "true", 1, "fa", "fa-lg", "volume-up", 3, "icon"], [2, "border-top", "1px solid #ddd"], [2, "text-align", "center"], [2, "padding", "1px 3px"]], template: function MatBasicAudioPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-card", 0);
        ɵngcc0.ɵɵelement(1, "audio", 1, 2);
        ɵngcc0.ɵɵelementStart(3, "button", 3);
        ɵngcc0.ɵɵelement(4, "fa-icon", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "button", 5);
        ɵngcc0.ɵɵlistener("click", function MatBasicAudioPlayerComponent_Template_button_click_5_listener() { return ctx.playBtnHandler(); });
        ɵngcc0.ɵɵtemplate(6, MatBasicAudioPlayerComponent_fa_icon_6_Template, 1, 3, "fa-icon", 6);
        ɵngcc0.ɵɵtemplate(7, MatBasicAudioPlayerComponent_fa_icon_7_Template, 1, 2, "fa-icon", 7);
        ɵngcc0.ɵɵtemplate(8, MatBasicAudioPlayerComponent_fa_icon_8_Template, 1, 2, "fa-icon", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "button", 9);
        ɵngcc0.ɵɵelement(10, "fa-icon", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 10);
        ɵngcc0.ɵɵelementStart(12, "mat-slider", 11);
        ɵngcc0.ɵɵlistener("change", function MatBasicAudioPlayerComponent_Template_mat_slider_change_12_listener($event) { return ctx.currTimePosChanged($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "div", 12);
        ɵngcc0.ɵɵtemplate(14, MatBasicAudioPlayerComponent_span_14_Template, 3, 3, "span", 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(15, MatBasicAudioPlayerComponent_button_15_Template, 3, 2, "button", 14);
        ɵngcc0.ɵɵelementStart(16, "button", 15);
        ɵngcc0.ɵɵelement(17, "fa-icon", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "button", 16);
        ɵngcc0.ɵɵelement(19, "fa-icon", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "button", 17);
        ɵngcc0.ɵɵelement(21, "fa-icon", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(22, MatBasicAudioPlayerComponent_mat_card_22_Template, 4, 1, "mat-card", 18);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.audioUrl, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(15, _c8));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.loaderDisplay);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loaderDisplay);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.loaderDisplay && !ctx.isPlaying);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.loaderDisplay && ctx.isPlaying);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(16, _c9));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("max", ctx.duration);
        ɵngcc0.ɵɵpropertyInterpolate("value", ctx.currentTime);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.duration !== 0.01);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.displayVolumeControls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(17, _c10));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(18, _c11));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("icon", ɵngcc0.ɵɵpureFunction0(19, _c12));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.displayTitle && ctx.title !== "");
    } }, directives: function () { return [ɵngcc1.MatCard, ɵngcc2.MatButton, ɵngcc3.FaIconComponent, ɵngcc4.NgIf, ɵngcc5.MatSlider]; }, pipes: function () { return [SecondsToMinutesPipe]; }, styles: ["mat-card[_ngcontent-%COMP%], mat-slider[_ngcontent-%COMP%]{padding:0!important}button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:hover{outline:0!important}.ngx-basic-audio-player[_ngcontent-%COMP%]{min-width:200px}"] });
/** @nocollapse */
MatBasicAudioPlayerComponent.ctorParameters = () => [];
MatBasicAudioPlayerComponent.propDecorators = {
    title: [{ type: Input }],
    audioUrl: [{ type: Input }],
    displayTitle: [{ type: Input }],
    autoPlay: [{ type: Input }],
    displayVolumeControls: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatBasicAudioPlayerComponent, [{
        type: Component,
        args: [{
                selector: 'mat-basic-audio-player',
                template: "<mat-card class=\"d-flex ngx-basic-audio-player\">\n    <audio [src]=\"audioUrl\" #audioPlayer id=\"audioPlayer\"></audio>\n    <button mat-button id=\"backward\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','backward']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button (click)='playBtnHandler();' class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\" [disabled]=\"loaderDisplay\">\n        <fa-icon *ngIf=\"loaderDisplay\" title=\"loading...\" class=\"fa fa-lg loading-track\" [pulse]=\"true\"\n            [icon]=\"['fas','spinner']\" aria-hidden=\"true\"></fa-icon>\n        <fa-icon *ngIf=\"!loaderDisplay && !isPlaying\" class=\"fa fa-lg play-track\" [icon]=\"['fas','play']\"\n            aria-hidden=\"true\"></fa-icon>\n        <fa-icon *ngIf=\"!loaderDisplay && isPlaying\" class=\"fa fa-lg pause-track\" [icon]=\"['fas','pause']\"\n            aria-hidden=\"true\"></fa-icon>\n    </button>\n    <button mat-button id=\"forward\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','forward']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<div class=\"flex-fill pl-1 ngx-basic-audio-player-slider\">\n        <mat-slider style=\"width: 100%\" min=\"0\" max=\"{{duration}}\" value=\"{{currentTime}}\"\n            (change)=\"currTimePosChanged($event)\"></mat-slider>\n    </div>\n    <div class=\"d-flex ngx-basic-audio-player-duration\">\n        <span *ngIf=\"duration !== 0.01\" class=\"pl-2 pr-3 my-auto\" style=\"font-size: 14px!important;\">\n            -{{duration-currentTime |\n            secondsToMinutes }}\n        </span>\n    </div>\n    <button *ngIf=\"displayVolumeControls\" mat-button (click)='toggleVolume();'\n        style=\"padding: 0px!important; min-width:48px!important;\">\n        <fa-icon *ngIf=\"volume === 0\" class=\"fa fa-lg volume-mute\" [icon]=\"['fas','volume-mute']\" aria-hidden=\"true\">\n        </fa-icon>\n        <fa-icon *ngIf=\"volume > 0\" class=\"fa fa-lg volume-up\" [icon]=\"['fas','volume-up']\" aria-hidden=\"true\">\n        </fa-icon>\n    </button>\n<button mat-button id=\"speed\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','tachometer-alt']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button id=\"audioOpen\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','book-open']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n<button mat-button id=\"audioClose\"\n class=\"ngx-basic-audio-player-button-handler\"\n        style=\"font-size: 14px!important;\">\n        <fa-icon class=\"fa fa-lg play-track\" [icon]=\"['fas','times']\" aria-hidden=\"true\">        </fa-icon>\n            </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle && title !== ''\" style=\"border-top: 1px solid #ddd;\">\n    <div style=\"text-align: center;\">\n        <div style=\"padding:1px 3px;\">\n            {{ title }}\n        </div>\n    </div>\n</mat-card>",
                styles: ["mat-card,mat-slider{padding:0!important}button:focus,button:hover{outline:0!important}.ngx-basic-audio-player{min-width:200px}"]
            }]
    }], function () { return []; }, { displayTitle: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], displayVolumeControls: [{
            type: Input
        }], title: [{
            type: Input
        }], audioUrl: [{
            type: Input
        }] }); })();

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
SecondsToMinutesPipe.ɵfac = function SecondsToMinutesPipe_Factory(t) { return new (t || SecondsToMinutesPipe)(); };
SecondsToMinutesPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "secondsToMinutes", type: SecondsToMinutesPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SecondsToMinutesPipe, [{
        type: Pipe,
        args: [{ name: 'secondsToMinutes' }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MaterialModule });
MaterialModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
        MatSliderModule, MatExpansionModule, MatPaginatorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MaterialModule, { exports: function () { return [MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
        MatSliderModule, MatExpansionModule, MatPaginatorModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaterialModule, [{
        type: NgModule,
        args: [{
                exports: [
                    MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
                    MatSliderModule, MatExpansionModule, MatPaginatorModule
                ]
            }]
    }], null, null); })();
class NgxAudioPlayerModule {
    constructor() {
        // Icons for User Favorite Page
        library.add(faPlay, faPause, faSpinner, faStepForward, faStepBackward, faVolumeMute, faVolumeUp);
    }
}
NgxAudioPlayerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxAudioPlayerModule });
NgxAudioPlayerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxAudioPlayerModule_Factory(t) { return new (t || NgxAudioPlayerModule)(); }, providers: [AudioPlayerService], imports: [[CommonModule, FormsModule, FontAwesomeModule, MaterialModule]] });
/** @nocollapse */
NgxAudioPlayerModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxAudioPlayerModule, { declarations: function () { return [MatBasicAudioPlayerComponent,
        SecondsToMinutesPipe,
        MatAdvancedAudioPlayerComponent]; }, imports: function () { return [CommonModule, FormsModule, FontAwesomeModule,
        MaterialModule]; }, exports: function () { return [MatBasicAudioPlayerComponent,
        MatAdvancedAudioPlayerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxAudioPlayerModule, [{
        type: NgModule,
        args: [{
                declarations: [MatBasicAudioPlayerComponent, SecondsToMinutesPipe, MatAdvancedAudioPlayerComponent],
                imports: [CommonModule, FormsModule, FontAwesomeModule, MaterialModule],
                exports: [MatBasicAudioPlayerComponent, MatAdvancedAudioPlayerComponent],
                providers: [AudioPlayerService]
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Track {
}

export { MatAdvancedAudioPlayerComponent, MatBasicAudioPlayerComponent, MaterialModule, NgxAudioPlayerModule, Track, BaseAudioPlayerFunctions as ɵa, AudioPlayerService as ɵb, SecondsToMinutesPipe as ɵc };

//# sourceMappingURL=ngx-audio-player.js.map