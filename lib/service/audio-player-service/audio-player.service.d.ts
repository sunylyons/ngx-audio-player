import { BehaviorSubject } from 'rxjs';
import { Track } from '../../model/track.model';
import * as ɵngcc0 from '@angular/core';
export declare class AudioPlayerService {
    playlist: Track[];
    indexSong: number;
    currentTrack: BehaviorSubject<{}>;
    currentTime: number;
    duration: number;
    constructor();
    init(): void;
    nextSong(): void;
    previousSong(): void;
    resetPlaylist(): void;
    selectATrack(index: number): void;
    updateCurrentSong(): void;
    getSubjectCurrentTrack(): BehaviorSubject<{}>;
    getPlaylist(): Track[];
    setPlaylist(playlist: Track[]): void;
    getIndexSong(): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AudioPlayerService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AudioPlayerService>;
}

//# sourceMappingURL=audio-player.service.d.ts.map