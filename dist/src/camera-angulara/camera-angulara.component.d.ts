import { EventEmitter, OnInit } from '@angular/core';
import { IDimensions } from '../utilities/interfaces/IDimensions';
export declare class CameraAngularaComponent implements OnInit {
    private navigator;
    /**
     * The number of seconds you want for the camera to countdown before the picture takes.
     * @type {number}
     */
    countdown: number;
    /**
     * The width of the image in pixels.
     * @type {number}
     */
    width: number;
    /**
     * The height of the image in pixels.
     * @type {number}
     */
    height: number;
    /**
     * The desired format of the image (as in JPEG, PNG, etc).
     * @type {string}
     */
    imageFormat: string;
    /**
     * The message to be displayed upon capture.
     * @type {string}
     */
    captureMessage: string;
    /**
     * An indicator that fires when the picture is taken allowing for a parent component to be
     * able to listen for the image's being taken.
     * @type {EventEmitter<Object>}
     */
    onPhotoCapture: EventEmitter<{
        image;
        video;
    }>;
    image: ImageBitmap;
    stream: MediaStream;
    streaming: boolean;
    canvas: IDimensions;
    video: IDimensions;
    videoObj: object;
    constructor(navigator: Navigator);
    ngOnInit(): void;
    /**
     * This is passed as an event listener to the {@code canplay} event on video.
     * This sets the video to be streaming when it can play.
     */
    streamOnCanPlay(): void;
    /**
     * The method called upon the button click to take a picture.
     */
    takePhoto(): void;
}
