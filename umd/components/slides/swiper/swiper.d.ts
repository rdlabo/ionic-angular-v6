/**
 * Adopted from Swiper
 * Most modern mobile touch slider and framework with hardware
 * accelerated transitions.
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 */
import { Platform } from '../../../platform/platform';
import { Slides } from '../slides';
export declare function initSwiper(s: Slides, plt: Platform): void;
export declare function startAutoplay(s: Slides, plt: Platform): boolean;
export declare function stopAutoplay(s: Slides): void;
export declare function pauseAutoplay(s: Slides, plt: Platform, speed?: number): void;
export declare function updateAutoHeight(s: Slides): void;
export declare function updateContainerSize(s: Slides, plt: Platform): void;
export declare function updateSlidesSize(s: Slides, plt: Platform): void;
export declare function currentSlidesPerView(s: Slides): number;
export declare function update(s: Slides, plt: Platform, updateTranslate?: boolean): void;
export declare function fixLoop(s: Slides, plt: Platform): void;
export declare function slideTo(s: Slides, plt: Platform, slideIndex?: number, speed?: number, runCallbacks?: boolean, internal?: boolean): boolean;
export declare function onTransitionStart(s: Slides, runCallbacks?: boolean): void;
export declare function onTransitionEnd(s: Slides, plt: Platform, runCallbacks?: boolean): void;
export declare function slideNext(s: Slides, plt: Platform, runCallbacks?: boolean, speed?: number, internal?: boolean): any;
export declare function slidePrev(s: Slides, plt: Platform, runCallbacks?: boolean, speed?: number, internal?: boolean): any;
export declare function slideReset(s: Slides, plt: Platform, runCallbacks?: boolean, speed?: number): boolean;
export declare function disableTouchControl(s: Slides): boolean;
export declare function enableTouchControl(s: Slides): boolean;
export declare function destroySwiper(s: Slides): void;
