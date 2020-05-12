/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatSliderModule, MatExpansionModule, MatFormFieldModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { MatBasicAudioPlayerComponent } from './component/mat-basic-audio-player/mat-basic-audio-player.component';
import { AudioPlayerService } from './service/audio-player-service/audio-player.service';
import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';
import { MatAdvancedAudioPlayerComponent } from './component/mat-advanced-audio-player/mat-advanced-audio-player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faSpinner, faStepForward, faStepBackward, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
export class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
                    MatSliderModule, MatExpansionModule, MatPaginatorModule
                ]
            },] }
];
export class NgxAudioPlayerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1ZGlvLXBsYXllci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXVkaW8tcGxheWVyLyIsInNvdXJjZXMiOlsibGliL25neC1hdWRpby1wbGF5ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxlQUFlLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQzVILE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDbkgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUNwRixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVE3QyxNQUFNLE9BQU8sY0FBYzs7O1lBTjFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO29CQUNsRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCO2lCQUN4RDthQUNGOztBQVNELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0I7UUFDRSwrQkFBK0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7WUFWRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQTRCLEVBQUUsb0JBQW9CLEVBQUUsK0JBQStCLENBQUM7Z0JBQ25HLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO2dCQUN2RSxPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSwrQkFBK0IsQ0FBQztnQkFDeEUsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXRTbGlkZXJNb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRUYWJsZU1vZHVsZSwgTWF0UGFnaW5hdG9yTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdEJhc2ljQXVkaW9QbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9tYXQtYmFzaWMtYXVkaW8tcGxheWVyL21hdC1iYXNpYy1hdWRpby1wbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEF1ZGlvUGxheWVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9hdWRpby1wbGF5ZXItc2VydmljZS9hdWRpby1wbGF5ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Vjb25kc1RvTWludXRlc1BpcGUgfSBmcm9tICcuL3BpcGUvc2Vjb25kcy10by1taW51dGVzJztcbmltcG9ydCB7IE1hdEFkdmFuY2VkQXVkaW9QbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9tYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyL21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge1xuICBmYVBsYXksIGZhUGF1c2UsIGZhU3Bpbm5lciwgZmFTdGVwRm9yd2FyZCwgZmFTdGVwQmFja3dhcmQsIGZhVm9sdW1lTXV0ZSwgZmFWb2x1bWVVcFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsIE1hdENhcmRNb2R1bGUsIE1hdFRhYmxlTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLCBNYXRFeHBhbnNpb25Nb2R1bGUsIE1hdFBhZ2luYXRvck1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTW9kdWxlIHsgfVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNYXRCYXNpY0F1ZGlvUGxheWVyQ29tcG9uZW50LCBTZWNvbmRzVG9NaW51dGVzUGlwZSwgTWF0QWR2YW5jZWRBdWRpb1BsYXllckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBGb250QXdlc29tZU1vZHVsZSwgTWF0ZXJpYWxNb2R1bGVdLFxuICBleHBvcnRzOiBbTWF0QmFzaWNBdWRpb1BsYXllckNvbXBvbmVudCwgTWF0QWR2YW5jZWRBdWRpb1BsYXllckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0F1ZGlvUGxheWVyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4QXVkaW9QbGF5ZXJNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBJY29ucyBmb3IgVXNlciBGYXZvcml0ZSBQYWdlXG4gICAgbGlicmFyeS5hZGQoZmFQbGF5LCBmYVBhdXNlLCBmYVNwaW5uZXIsIGZhU3RlcEZvcndhcmQsIGZhU3RlcEJhY2t3YXJkLCBmYVZvbHVtZU11dGUsIGZhVm9sdW1lVXApO1xuICB9XG59XG4iXX0=