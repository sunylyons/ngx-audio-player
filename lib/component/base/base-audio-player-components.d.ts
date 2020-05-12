import { ElementRef } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import * as ɵngcc0 from '@angular/core';
export declare class BaseAudioPlayerFunctions {
    player: ElementRef;
    timeLineDuration: MatSlider;
    loaderDisplay: boolean;
    isPlaying: boolean;
    currentTime: number;
    volume: number;
    duration: number;
    currTimePosChanged(event: any): void;
    bindPlayerEvent(): void;
    playBtnHandler(): void;
    play(): void;
    toggleVolume(): void;
    private setVolume;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseAudioPlayerFunctions, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseAudioPlayerFunctions, never, never, {}, {}, never>;
}

//# sourceMappingURL=base-audio-player-components.d.ts.map