import { OnInit } from '@angular/core';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
//import { MatSlider, MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSlider } from '@angular/material/slider';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Track } from '../../model/track.model';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';
import * as ɵngcc0 from '@angular/core';
export declare class MatAdvancedAudioPlayerComponent extends BaseAudioPlayerFunctions implements OnInit {
    private playlistService;
    displayedColumns: string[];
    timeLineDuration: MatSlider;
    dataSource: MatTableDataSource<Track>;
    paginator: MatPaginator;
    playlistData: Track[];
    displayTitle: boolean;
    displayPlaylist: boolean;
    pageSizeOptions: number[];
    expanded: boolean;
    autoPlay: boolean;
    displayVolumeControls: boolean;
    playlistTrack: any;
    constructor(playlistService: AudioPlayerService);
    ngOnInit(): void;
    matPaginator: MatPaginator;
    setDataSourceAttributes(): void;
    nextSong(): void;
    previousSong(): void;
    resetSong(): void;
    selectTrack(index: number): void;
    checkIfSongHasStartedSinceAtleastTwoSeconds(): boolean;
    playlist: Track[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatAdvancedAudioPlayerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatAdvancedAudioPlayerComponent, "mat-advanced-audio-player", never, { "displayTitle": "displayTitle"; "displayPlaylist": "displayPlaylist"; "pageSizeOptions": "pageSizeOptions"; "expanded": "expanded"; "autoPlay": "autoPlay"; "displayVolumeControls": "displayVolumeControls"; "playlist": "playlist"; }, {}, never, never>;
}

//# sourceMappingURL=mat-advanced-audio-player.component.d.ts.map