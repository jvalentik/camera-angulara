import { OnInit } from '@angular/core';
import { IDimensions } from '../utilities/interfaces/IDimensions';
export declare class CameraAngularaComponent implements OnInit {
    private navigator;
    countdown: number;
    canvas: IDimensions;
    video: IDimensions;
    width: number;
    imageFormat: string;
    captureMessage: string;
    stream: MediaStream;
    height: number;
    streaming: boolean;
    constructor(navigator: Navigator);
    ngOnInit(): void;
    resizeOnCanPlay(video: any): void;
}
