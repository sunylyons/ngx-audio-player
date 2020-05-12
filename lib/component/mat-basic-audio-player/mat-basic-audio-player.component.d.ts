import { OnInit } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';
import * as ɵngcc0 from '@angular/core';
export declare class MatBasicAudioPlayerComponent extends BaseAudioPlayerFunctions implements OnInit {
    title: string;
    audioUrl: string;
    displayTitle: boolean;
    autoPlay: boolean;
    displayVolumeControls: boolean;
    constructor();
    ngOnInit(): void;
    resetSong(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatBasicAudioPlayerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatBasicAudioPlayerComponent, "mat-basic-audio-player", never, { "displayTitle": "displayTitle"; "autoPlay": "autoPlay"; "displayVolumeControls": "displayVolumeControls"; "title": "title"; "audioUrl": "audioUrl"; }, {}, never, never>;
}

//# sourceMappingURL=mat-basic-audio-player.component.d.ts.map