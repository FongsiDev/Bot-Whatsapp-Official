import { z } from 'zod';
export declare const FacebookDownloaderArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const FacebookDownloaderSchema: z.ZodObject<{
    id: z.ZodString;
    thumbnail: z.ZodString;
    duration: z.ZodNumber;
    result: z.ZodArray<z.ZodObject<{
        size: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        ext: z.ZodString;
        url: z.ZodString;
        quality: z.ZodOptional<z.ZodString>;
        vcodec: z.ZodOptional<z.ZodString>;
        fid: z.ZodString;
        isVideo: z.ZodBoolean;
        isAudio: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        size?: string | number | undefined;
        quality?: string | undefined;
        vcodec?: string | undefined;
        url: string;
        ext: string;
        fid: string;
        isVideo: boolean;
        isAudio: boolean;
    }, {
        size?: string | number | undefined;
        quality?: string | undefined;
        vcodec?: string | undefined;
        url: string;
        ext: string;
        fid: string;
        isVideo: boolean;
        isAudio: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    thumbnail: string;
    duration: number;
    result: {
        size?: string | number | undefined;
        quality?: string | undefined;
        vcodec?: string | undefined;
        url: string;
        ext: string;
        fid: string;
        isVideo: boolean;
        isAudio: boolean;
    }[];
}, {
    id: string;
    thumbnail: string;
    duration: number;
    result: {
        size?: string | number | undefined;
        quality?: string | undefined;
        vcodec?: string | undefined;
        url: string;
        ext: string;
        fid: string;
        isVideo: boolean;
        isAudio: boolean;
    }[];
}>;
export declare const FacebookDownloaderV2Schema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    description: z.ZodString;
    thumbnail: z.ZodString;
    result: z.ZodArray<z.ZodObject<{
        quality: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        quality: string;
    }, {
        url: string;
        quality: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    title: string;
    description: string;
    thumbnail: string;
    result: {
        url: string;
        quality: string;
    }[];
}, {
    id?: string | undefined;
    title: string;
    description: string;
    thumbnail: string;
    result: {
        url: string;
        quality: string;
    }[];
}>;
export declare const FacebookDownloaderV3Schema: z.ZodObject<{
    title: z.ZodString;
    thumbnail: z.ZodOptional<z.ZodString>;
    result: z.ZodArray<z.ZodObject<{
        quality: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        isAudio: z.ZodBoolean;
        isVideo: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        quality?: string | undefined;
        url: string;
        isVideo: boolean;
        isAudio: boolean;
    }, {
        quality?: string | undefined;
        url: string;
        isVideo: boolean;
        isAudio: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    thumbnail?: string | undefined;
    title: string;
    result: {
        quality?: string | undefined;
        url: string;
        isVideo: boolean;
        isAudio: boolean;
    }[];
}, {
    thumbnail?: string | undefined;
    title: string;
    result: {
        quality?: string | undefined;
        url: string;
        isVideo: boolean;
        isAudio: boolean;
    }[];
}>;
export type FacebookDownloaderArgs = z.infer<typeof FacebookDownloaderArgsSchema>;
export type FacebookDownloader = z.infer<typeof FacebookDownloaderSchema>;
export type FacebookDownloaderV2 = z.infer<typeof FacebookDownloaderV2Schema>;
export type FacebookDownloaderV3 = z.infer<typeof FacebookDownloaderV3Schema>;
export declare const InstagramDownloaderArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const IinstagramDownloaderSchema: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export declare const InstagramDownloaderSchema: z.ZodIntersection<z.ZodObject<{
    thumbnail: z.ZodString;
}, "strip", z.ZodTypeAny, {
    thumbnail: string;
}, {
    thumbnail: string;
}>, z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>>;
export declare const InstagramDownloaderV2Schema: z.ZodObject<z.extendShape<{
    url: z.ZodString;
}, {
    thumbnail: z.ZodOptional<z.ZodString>;
    resolution: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    thumbnail?: string | undefined;
    resolution?: string | undefined;
    url: string;
}, {
    thumbnail?: string | undefined;
    resolution?: string | undefined;
    url: string;
}>;
export declare const InstagramDownloaderV3Schema: z.ZodObject<{
    url: z.ZodString;
    title: z.ZodString;
    thumbnail: z.ZodString;
    duration: z.ZodString;
    source: z.ZodString;
    medias: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        quality: z.ZodString;
        formattedSize: z.ZodString;
        extension: z.ZodString;
        audioAvailable: z.ZodBoolean;
        videoAvailable: z.ZodBoolean;
        cached: z.ZodBoolean;
        chunked: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        url: string;
        quality: string;
        formattedSize: string;
        extension: string;
        audioAvailable: boolean;
        videoAvailable: boolean;
        cached: boolean;
        chunked: boolean;
    }, {
        url: string;
        quality: string;
        formattedSize: string;
        extension: string;
        audioAvailable: boolean;
        videoAvailable: boolean;
        cached: boolean;
        chunked: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    source: string;
    url: string;
    title: string;
    thumbnail: string;
    duration: string;
    medias: {
        url: string;
        quality: string;
        formattedSize: string;
        extension: string;
        audioAvailable: boolean;
        videoAvailable: boolean;
        cached: boolean;
        chunked: boolean;
    }[];
}, {
    source: string;
    url: string;
    title: string;
    thumbnail: string;
    duration: string;
    medias: {
        url: string;
        quality: string;
        formattedSize: string;
        extension: string;
        audioAvailable: boolean;
        videoAvailable: boolean;
        cached: boolean;
        chunked: boolean;
    }[];
}>;
export type IinstagramDownloader = z.infer<typeof IinstagramDownloaderSchema>;
export type InstagramDownloaderArgs = z.infer<typeof InstagramDownloaderArgsSchema>;
export type InstagramDownloader = z.infer<typeof InstagramDownloaderSchema>;
export type InstagramDownloaderV2 = z.infer<typeof InstagramDownloaderV2Schema>;
export type InstagramDownloaderV3 = z.infer<typeof InstagramDownloaderV3Schema>;
export declare const IinstagramStorySchema: z.ZodObject<{
    user: z.ZodObject<{
        username: z.ZodString;
        profilePicUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        username: string;
        profilePicUrl: string;
    }, {
        username: string;
        profilePicUrl: string;
    }>;
    results: z.ZodArray<z.ZodObject<{
        thumbnail: z.ZodString;
        url: z.ZodString;
        type: z.ZodString;
        isVideo: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
        thumbnail: string;
        isVideo: boolean;
    }, {
        type: string;
        url: string;
        thumbnail: string;
        isVideo: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    user: {
        username: string;
        profilePicUrl: string;
    };
    results: {
        type: string;
        url: string;
        thumbnail: string;
        isVideo: boolean;
    }[];
}, {
    user: {
        username: string;
        profilePicUrl: string;
    };
    results: {
        type: string;
        url: string;
        thumbnail: string;
        isVideo: boolean;
    }[];
}>;
export declare const InstagramStoryArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const InstagramStoryV2Schema: z.ZodObject<{
    user: z.ZodObject<{
        username: z.ZodString;
        profilePicUrl: z.ZodString;
        isVerified: z.ZodBoolean;
        fullName: z.ZodString;
        followersH: z.ZodString;
        followers: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        username: string;
        profilePicUrl: string;
        isVerified: boolean;
        fullName: string;
        followersH: string;
        followers: number;
    }, {
        username: string;
        profilePicUrl: string;
        isVerified: boolean;
        fullName: string;
        followersH: string;
        followers: number;
    }>;
    results: z.ZodArray<z.ZodObject<{
        thumbnail: z.ZodString;
        url: z.ZodString;
        type: z.ZodString;
        isVideo: z.ZodBoolean;
        timestamp: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
        thumbnail: string;
        isVideo: boolean;
        timestamp: number;
    }, {
        type: string;
        url: string;
        thumbnail: string;
        isVideo: boolean;
        timestamp: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    user: {
        username: string;
        profilePicUrl: string;
        isVerified: boolean;
        fullName: string;
        followersH: string;
        followers: number;
    };
    results: {
        type: string;
        url: string;
        thumbnail: string;
        isVideo: boolean;
        timestamp: number;
    }[];
}, {
    user: {
        username: string;
        profilePicUrl: string;
        isVerified: boolean;
        fullName: string;
        followersH: string;
        followers: number;
    };
    results: {
        type: string;
        url: string;
        thumbnail: string;
        isVideo: boolean;
        timestamp: number;
    }[];
}>;
export type IinstagramStory = z.infer<typeof IinstagramStorySchema>;
export type InstagramStoryArgs = z.infer<typeof InstagramStoryArgsSchema>;
export type InstagramStory = IinstagramStory;
export type InstagramStoryV2 = z.infer<typeof InstagramStoryV2Schema>;
export declare const InstagramStalkArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const InstagramStalkSchema: z.ZodObject<{
    name: z.ZodString;
    username: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    postsH: z.ZodString;
    posts: z.ZodNumber;
    followersH: z.ZodString;
    followers: z.ZodNumber;
    followingH: z.ZodString;
    following: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    avatar?: string | undefined;
    name: string;
    description: string;
    username: string;
    followersH: string;
    followers: number;
    postsH: string;
    posts: number;
    followingH: string;
    following: number;
}, {
    avatar?: string | undefined;
    name: string;
    description: string;
    username: string;
    followersH: string;
    followers: number;
    postsH: string;
    posts: number;
    followingH: string;
    following: number;
}>;
export type InstagramStalkArgs = z.infer<typeof InstagramStalkArgsSchema>;
export type InstagramStalk = z.infer<typeof InstagramStalkSchema>;
export declare const TiktokDownloaderArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const TiktokDownloaderSchema: z.ZodObject<{
    author: z.ZodObject<{
        nickname: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        nickname: string;
    }, {
        nickname: string;
    }>;
    description: z.ZodString;
    video: z.ZodObject<{
        no_watermark: z.ZodString;
        no_watermark2: z.ZodString;
        no_watermark_raw: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        no_watermark: string;
        no_watermark2: string;
        no_watermark_raw: string;
    }, {
        no_watermark: string;
        no_watermark2: string;
        no_watermark_raw: string;
    }>;
}, "strip", z.ZodTypeAny, {
    video: {
        no_watermark: string;
        no_watermark2: string;
        no_watermark_raw: string;
    };
    description: string;
    author: {
        nickname: string;
    };
}, {
    video: {
        no_watermark: string;
        no_watermark2: string;
        no_watermark_raw: string;
    };
    description: string;
    author: {
        nickname: string;
    };
}>;
export declare const TiktokDownloaderV2Schema: z.ZodObject<{
    author: z.ZodObject<{
        nickname: z.ZodString;
        unique_id: z.ZodString;
        avatar: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        avatar: string;
        nickname: string;
        unique_id: string;
    }, {
        avatar: string;
        nickname: string;
        unique_id: string;
    }>;
    video: z.ZodObject<{
        no_watermark: z.ZodString;
        no_watermark_hd: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        no_watermark: string;
        no_watermark_hd: string;
    }, {
        no_watermark: string;
        no_watermark_hd: string;
    }>;
}, "strip", z.ZodTypeAny, {
    video: {
        no_watermark: string;
        no_watermark_hd: string;
    };
    author: {
        avatar: string;
        nickname: string;
        unique_id: string;
    };
}, {
    video: {
        no_watermark: string;
        no_watermark_hd: string;
    };
    author: {
        avatar: string;
        nickname: string;
        unique_id: string;
    };
}>;
export declare const TiktokDownloaderV3Schema: z.ZodObject<{
    author: z.ZodObject<{
        nickname: z.ZodString;
        avatar: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        avatar: string;
        nickname: string;
    }, {
        avatar: string;
        nickname: string;
    }>;
    description: z.ZodString;
    video: z.ZodObject<{
        no_watermark: z.ZodString;
        no_watermark2: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        no_watermark: string;
        no_watermark2: string;
    }, {
        no_watermark: string;
        no_watermark2: string;
    }>;
    music: z.ZodString;
}, "strip", z.ZodTypeAny, {
    video: {
        no_watermark: string;
        no_watermark2: string;
    };
    description: string;
    author: {
        avatar: string;
        nickname: string;
    };
    music: string;
}, {
    video: {
        no_watermark: string;
        no_watermark2: string;
    };
    description: string;
    author: {
        avatar: string;
        nickname: string;
    };
    music: string;
}>;
export type TiktokDownloaderArgs = z.infer<typeof TiktokDownloaderArgsSchema>;
export type TiktokDownloader = z.infer<typeof TiktokDownloaderSchema>;
export type TiktokDownloaderV2 = z.infer<typeof TiktokDownloaderV2Schema>;
export type TiktokDownloaderV3 = z.infer<typeof TiktokDownloaderV3Schema>;
export interface TiktokFyp {
    id: string;
    desc: string;
    createdTime: Date;
    video: {
        id: string;
        height: number;
        width: number;
        duration: number;
        ratio: string;
        cover: string;
        originCover: string;
        dynamicCover: string;
        playAddr: string;
        downloadAddr: string;
        shareCover: string[];
        reflowCover: string;
        bitrate: number;
        encodedType: string;
        format: string;
        videoQuality: string;
        encodeUserTag: string;
        codecType: string;
        definition: string;
    };
    author: {
        id: string;
        uniqueId: string;
        nickname: string;
        avatarThumb: string;
        avatarMedium: string;
        avatarLarger: string;
        signature: string;
        verified: boolean;
        secUid: string;
        secret: boolean;
        ftc: boolean;
        relation: number;
        openFavorite: boolean;
        commentSetting: number;
        duetSetting: number;
        stitchSetting: number;
        privateAccount: boolean;
        isADVirtual: boolean;
    };
    music: {
        id: string;
        title: string;
        playUrl: string;
        coverThumb: string;
        coverMedium: string;
        coverLarge: string;
        authorName: string;
        original: boolean;
        duration: number;
        album: string;
    };
    challenges?: {
        id: string;
        title: string;
        desc: string;
        profileThumb: string;
        profileMedium: string;
        profileLarger: string;
        coverThumb: string;
        coverMedium: string;
        coverLarger: string;
        isCommerce: boolean;
    }[];
    stats: {
        diggCount: number;
        shareCount: number;
        commentCount: number;
        playCount: number;
    };
    duetInfo: {
        duetFromId: string;
    };
    originalItem: boolean;
    officalItem: boolean;
    textExtra?: {
        awemeId: string;
        start: number;
        end: number;
        hashtagName: string;
        hashtagId: string;
        type: 1;
        userId: string;
        isCommerce: boolean;
        userUniqueId: string;
        secUid: string;
        subType: number;
    }[];
    secret: boolean;
    forFriend: boolean;
    digged: boolean;
    itemCommentStatus: number;
    showNotPass: boolean;
    vl1: boolean;
    itemMute: boolean;
    authorStats: {
        followingCount: number;
        followerCount: number;
        heartCount: number;
        videoCount: number;
        diggCount: number;
        heart: number;
    };
    privateItem: boolean;
    duetEnabled: boolean;
    stitchEnabled: boolean;
    shareEnabled: boolean;
    isAd: boolean;
    duetDisplay: number;
    stitchDisplay: number;
}
export declare const GoogleItArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const GoogleItSchema: z.ZodObject<{
    info: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        type?: string | undefined;
        title?: string | undefined;
        image?: string[] | undefined;
        description?: string | undefined;
    }, {
        type?: string | undefined;
        title?: string | undefined;
        image?: string[] | undefined;
        description?: string | undefined;
    }>;
    articles: z.ZodArray<z.ZodObject<{
        header: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        header: string;
        title: string;
        description: string;
    }, {
        url: string;
        header: string;
        title: string;
        description: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    info: {
        type?: string | undefined;
        title?: string | undefined;
        image?: string[] | undefined;
        description?: string | undefined;
    };
    articles: {
        url: string;
        header: string;
        title: string;
        description: string;
    }[];
}, {
    info: {
        type?: string | undefined;
        title?: string | undefined;
        image?: string[] | undefined;
        description?: string | undefined;
    };
    articles: {
        url: string;
        header: string;
        title: string;
        description: string;
    }[];
}>;
export type GoogleItArgs = z.infer<typeof GoogleItArgsSchema>;
export type GoogleIt = z.infer<typeof GoogleItSchema>;
export declare const TwitterDownloaderArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const ItwitterDownloaderSchema: z.ZodObject<{
    quality: z.ZodString;
    type: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    url: string;
    quality: string;
}, {
    type: string;
    url: string;
    quality: string;
}>;
export declare const TwitterDownloaderSchema: z.ZodIntersection<z.ZodObject<{
    isVideo: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isVideo: boolean;
}, {
    isVideo: boolean;
}>, z.ZodObject<{
    quality: z.ZodString;
    type: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    url: string;
    quality: string;
}, {
    type: string;
    url: string;
    quality: string;
}>>;
export declare const TwitterDownloaderV2Schema: z.ZodObject<{
    quality: z.ZodString;
    type: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    url: string;
    quality: string;
}, {
    type: string;
    url: string;
    quality: string;
}>;
export type TwitterDownloaderArgs = z.infer<typeof TwitterDownloaderArgsSchema>;
export type ItwitterDownloader = z.infer<typeof ItwitterDownloaderSchema>;
export type TwitterDownloader = z.infer<typeof TwitterDownloaderSchema>;
export type TwitterDownloaderV2 = ItwitterDownloader;
export declare const YoutubeSearchSchema: z.ZodObject<{
    video: z.ZodArray<z.ZodObject<{
        authorName: z.ZodString;
        authorAvatar: z.ZodString;
        videoId: z.ZodString;
        url: z.ZodString;
        thumbnail: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        publishedTime: z.ZodString;
        durationH: z.ZodString;
        durationS: z.ZodNumber;
        duration: z.ZodString;
        viewH: z.ZodString;
        view: z.ZodString;
        type: z.ZodLiteral<"video">;
    }, "strip", z.ZodTypeAny, {
        type: "video";
        url: string;
        view: string;
        title: string;
        description: string;
        authorName: string;
        thumbnail: string;
        duration: string;
        authorAvatar: string;
        videoId: string;
        publishedTime: string;
        durationH: string;
        durationS: number;
        viewH: string;
    }, {
        type: "video";
        url: string;
        view: string;
        title: string;
        description: string;
        authorName: string;
        thumbnail: string;
        duration: string;
        authorAvatar: string;
        videoId: string;
        publishedTime: string;
        durationH: string;
        durationS: number;
        viewH: string;
    }>, "many">;
    channel: z.ZodArray<z.ZodObject<{
        channelId: z.ZodString;
        url: z.ZodString;
        channelName: z.ZodString;
        username: z.ZodString;
        avatar: z.ZodString;
        isVerified: z.ZodBoolean;
        subscriberH: z.ZodString;
        subscriber: z.ZodString;
        description: z.ZodString;
        type: z.ZodLiteral<"channel">;
    }, "strip", z.ZodTypeAny, {
        type: "channel";
        url: string;
        description: string;
        username: string;
        isVerified: boolean;
        avatar: string;
        channelId: string;
        channelName: string;
        subscriberH: string;
        subscriber: string;
    }, {
        type: "channel";
        url: string;
        description: string;
        username: string;
        isVerified: boolean;
        avatar: string;
        channelId: string;
        channelName: string;
        subscriberH: string;
        subscriber: string;
    }>, "many">;
    playlist: z.ZodArray<z.ZodObject<{
        playlistId: z.ZodString;
        title: z.ZodString;
        thumbnail: z.ZodString;
        video: z.ZodArray<z.ZodObject<{
            videoId: z.ZodString;
            title: z.ZodString;
            durationH: z.ZodString;
            duration: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
            duration: string;
            videoId: string;
            durationH: string;
        }, {
            title: string;
            duration: string;
            videoId: string;
            durationH: string;
        }>, "many">;
        type: z.ZodLiteral<"mix">;
    }, "strip", z.ZodTypeAny, {
        type: "mix";
        title: string;
        video: {
            title: string;
            duration: string;
            videoId: string;
            durationH: string;
        }[];
        thumbnail: string;
        playlistId: string;
    }, {
        type: "mix";
        title: string;
        video: {
            title: string;
            duration: string;
            videoId: string;
            durationH: string;
        }[];
        thumbnail: string;
        playlistId: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    channel: {
        type: "channel";
        url: string;
        description: string;
        username: string;
        isVerified: boolean;
        avatar: string;
        channelId: string;
        channelName: string;
        subscriberH: string;
        subscriber: string;
    }[];
    video: {
        type: "video";
        url: string;
        view: string;
        title: string;
        description: string;
        authorName: string;
        thumbnail: string;
        duration: string;
        authorAvatar: string;
        videoId: string;
        publishedTime: string;
        durationH: string;
        durationS: number;
        viewH: string;
    }[];
    playlist: {
        type: "mix";
        title: string;
        video: {
            title: string;
            duration: string;
            videoId: string;
            durationH: string;
        }[];
        thumbnail: string;
        playlistId: string;
    }[];
}, {
    channel: {
        type: "channel";
        url: string;
        description: string;
        username: string;
        isVerified: boolean;
        avatar: string;
        channelId: string;
        channelName: string;
        subscriberH: string;
        subscriber: string;
    }[];
    video: {
        type: "video";
        url: string;
        view: string;
        title: string;
        description: string;
        authorName: string;
        thumbnail: string;
        duration: string;
        authorAvatar: string;
        videoId: string;
        publishedTime: string;
        durationH: string;
        durationS: number;
        viewH: string;
    }[];
    playlist: {
        type: "mix";
        title: string;
        video: {
            title: string;
            duration: string;
            videoId: string;
            durationH: string;
        }[];
        thumbnail: string;
        playlistId: string;
    }[];
}>;
export type YoutubeSearch = z.infer<typeof YoutubeSearchSchema>;
export declare const YoutubeDownloaderArgsSchema: z.ZodObject<{
    0: z.ZodString;
    1: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    1?: string | undefined;
    0: string;
}, {
    1?: string | undefined;
    0: string;
}>;
export declare const YoutubeVideoOrAudioSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
    quality: z.ZodString;
    fileSizeH: z.ZodString;
    fileSize: z.ZodNumber;
    download: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodPromise<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    quality: string;
    fileSizeH: string;
    fileSize: number;
    download: (...args: unknown[]) => Promise<string>;
}, {
    quality: string;
    fileSizeH: string;
    fileSize: number;
    download: (...args: unknown[]) => Promise<string>;
}>>;
export declare const YoutubeDonwloaderSchema: z.ZodObject<{
    id: z.ZodString;
    v_id: z.ZodOptional<z.ZodString>;
    thumbnail: z.ZodString;
    title: z.ZodString;
    video: z.ZodRecord<z.ZodString, z.ZodObject<{
        quality: z.ZodString;
        fileSizeH: z.ZodString;
        fileSize: z.ZodNumber;
        download: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodPromise<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        quality: string;
        fileSizeH: string;
        fileSize: number;
        download: (...args: unknown[]) => Promise<string>;
    }, {
        quality: string;
        fileSizeH: string;
        fileSize: number;
        download: (...args: unknown[]) => Promise<string>;
    }>>;
    audio: z.ZodRecord<z.ZodString, z.ZodObject<{
        quality: z.ZodString;
        fileSizeH: z.ZodString;
        fileSize: z.ZodNumber;
        download: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodPromise<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        quality: string;
        fileSizeH: string;
        fileSize: number;
        download: (...args: unknown[]) => Promise<string>;
    }, {
        quality: string;
        fileSizeH: string;
        fileSize: number;
        download: (...args: unknown[]) => Promise<string>;
    }>>;
}, "strip", z.ZodTypeAny, {
    v_id?: string | undefined;
    id: string;
    audio: Record<string, {
        quality: string;
        fileSizeH: string;
        fileSize: number;
        download: (...args: unknown[]) => Promise<string>;
    }>;
    title: string;
    video: Record<string, {
        quality: string;
        fileSizeH: string;
        fileSize: number;
        download: (...args: unknown[]) => Promise<string>;
    }>;
    thumbnail: string;
}, {
    v_id?: string | undefined;
    id: string;
    audio: Record<string, {
        quality: string;
        fileSizeH: string;
        fileSize: number;
        download: (...args: unknown[]) => Promise<string>;
    }>;
    title: string;
    video: Record<string, {
        quality: string;
        fileSizeH: string;
        fileSize: number;
        download: (...args: unknown[]) => Promise<string>;
    }>;
    thumbnail: string;
}>;
export declare const YoutubeDownloaderV2ArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const YoutubeDownloaderV3ArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const YoutubeVideoOrAudioV3Schema: z.ZodRecord<z.ZodString, z.ZodObject<{
    quality: z.ZodString;
    fileSizeH: z.ZodOptional<z.ZodString>;
    fileSize: z.ZodOptional<z.ZodNumber>;
    download: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodPromise<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    fileSizeH?: string | undefined;
    fileSize?: number | undefined;
    quality: string;
    download: (...args: unknown[]) => Promise<string>;
}, {
    fileSizeH?: string | undefined;
    fileSize?: number | undefined;
    quality: string;
    download: (...args: unknown[]) => Promise<string>;
}>>;
export declare const YoutubeDonwloaderV3Schema: z.ZodObject<{
    id: z.ZodString;
    thumbnail: z.ZodString;
    title: z.ZodString;
    video: z.ZodRecord<z.ZodString, z.ZodObject<{
        quality: z.ZodString;
        fileSizeH: z.ZodOptional<z.ZodString>;
        fileSize: z.ZodOptional<z.ZodNumber>;
        download: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodPromise<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        fileSizeH?: string | undefined;
        fileSize?: number | undefined;
        quality: string;
        download: (...args: unknown[]) => Promise<string>;
    }, {
        fileSizeH?: string | undefined;
        fileSize?: number | undefined;
        quality: string;
        download: (...args: unknown[]) => Promise<string>;
    }>>;
    audio: z.ZodRecord<z.ZodString, z.ZodObject<{
        quality: z.ZodString;
        fileSizeH: z.ZodOptional<z.ZodString>;
        fileSize: z.ZodOptional<z.ZodNumber>;
        download: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodPromise<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        fileSizeH?: string | undefined;
        fileSize?: number | undefined;
        quality: string;
        download: (...args: unknown[]) => Promise<string>;
    }, {
        fileSizeH?: string | undefined;
        fileSize?: number | undefined;
        quality: string;
        download: (...args: unknown[]) => Promise<string>;
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    audio: Record<string, {
        fileSizeH?: string | undefined;
        fileSize?: number | undefined;
        quality: string;
        download: (...args: unknown[]) => Promise<string>;
    }>;
    title: string;
    video: Record<string, {
        fileSizeH?: string | undefined;
        fileSize?: number | undefined;
        quality: string;
        download: (...args: unknown[]) => Promise<string>;
    }>;
    thumbnail: string;
}, {
    id: string;
    audio: Record<string, {
        fileSizeH?: string | undefined;
        fileSize?: number | undefined;
        quality: string;
        download: (...args: unknown[]) => Promise<string>;
    }>;
    title: string;
    video: Record<string, {
        fileSizeH?: string | undefined;
        fileSize?: number | undefined;
        quality: string;
        download: (...args: unknown[]) => Promise<string>;
    }>;
    thumbnail: string;
}>;
export type YoutubeDownloaderArgs = z.infer<typeof YoutubeDownloaderArgsSchema>;
export type YoutubeVideoOrAudio = z.infer<typeof YoutubeVideoOrAudioSchema>;
export type YoutubeDownloader = z.infer<typeof YoutubeDonwloaderSchema>;
export type YoutubeDownloaderV2Args = z.infer<typeof YoutubeDownloaderV2ArgsSchema>;
export type YoutubeDownloaderV3Args = z.infer<typeof YoutubeDownloaderV3ArgsSchema>;
export type YoutubeVideoOrAudioV3 = z.infer<typeof YoutubeVideoOrAudioV3Schema>;
export type YoutubeDownloaderV3 = z.infer<typeof YoutubeDonwloaderV3Schema>;
export declare const GroupWAArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const GroupWASchema: z.ZodObject<{
    url: z.ZodString;
    subject: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    subject: string;
}, {
    url: string;
    subject: string;
}>;
export type GroupWAArgs = z.infer<typeof GroupWAArgsSchema>;
export type GroupWA = z.infer<typeof GroupWASchema>;
export declare const AiovideodlArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const AiovideodlSchema: z.ZodObject<{
    url: z.ZodString;
    title: z.ZodString;
    thumbnail: z.ZodString;
    duration: z.ZodOptional<z.ZodString>;
    source: z.ZodString;
    medias: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        quality: z.ZodString;
        extension: z.ZodString;
        size: z.ZodNumber;
        formattedSize: z.ZodString;
        videoAvailable: z.ZodBoolean;
        audioAvailable: z.ZodBoolean;
        chunked: z.ZodBoolean;
        cached: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        url: string;
        size: number;
        quality: string;
        formattedSize: string;
        extension: string;
        audioAvailable: boolean;
        videoAvailable: boolean;
        cached: boolean;
        chunked: boolean;
    }, {
        url: string;
        size: number;
        quality: string;
        formattedSize: string;
        extension: string;
        audioAvailable: boolean;
        videoAvailable: boolean;
        cached: boolean;
        chunked: boolean;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    duration?: string | undefined;
    medias?: {
        url: string;
        size: number;
        quality: string;
        formattedSize: string;
        extension: string;
        audioAvailable: boolean;
        videoAvailable: boolean;
        cached: boolean;
        chunked: boolean;
    }[] | undefined;
    source: string;
    url: string;
    title: string;
    thumbnail: string;
}, {
    duration?: string | undefined;
    medias?: {
        url: string;
        size: number;
        quality: string;
        formattedSize: string;
        extension: string;
        audioAvailable: boolean;
        videoAvailable: boolean;
        cached: boolean;
        chunked: boolean;
    }[] | undefined;
    source: string;
    url: string;
    title: string;
    thumbnail: string;
}>;
export type AiovideodlArgs = z.infer<typeof AiovideodlArgsSchema>;
export type Aiovideodl = z.infer<typeof AiovideodlSchema>;
export declare const SaveFromArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const SaveFromSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        ext: z.ZodString;
        type: z.ZodString;
        name: z.ZodString;
        quality: z.ZodOptional<z.ZodNumber>;
        subname: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        quality?: number | undefined;
        subname?: string | undefined;
        type: string;
        url: string;
        name: string;
        ext: string;
    }, {
        quality?: number | undefined;
        subname?: string | undefined;
        type: string;
        url: string;
        name: string;
        ext: string;
    }>, "many">>;
    meta: z.ZodObject<{
        title: z.ZodString;
        source: z.ZodOptional<z.ZodString>;
        duration: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source?: string | undefined;
        duration?: string | undefined;
        title: string;
    }, {
        source?: string | undefined;
        duration?: string | undefined;
        title: string;
    }>;
    video_quality: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    thumb: z.ZodString;
    sd: z.ZodNullable<z.ZodObject<{
        url: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        format?: string | undefined;
        url: string;
    }, {
        format?: string | undefined;
        url: string;
    }>>;
    hd: z.ZodNullable<z.ZodObject<{
        url: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        format?: string | undefined;
        url: string;
    }, {
        format?: string | undefined;
        url: string;
    }>>;
    hosting: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    url?: {
        quality?: number | undefined;
        subname?: string | undefined;
        type: string;
        url: string;
        name: string;
        ext: string;
    }[] | undefined;
    video_quality?: string[] | undefined;
    meta: {
        source?: string | undefined;
        duration?: string | undefined;
        title: string;
    };
    thumb: string;
    sd: {
        format?: string | undefined;
        url: string;
    } | null;
    hd: {
        format?: string | undefined;
        url: string;
    } | null;
    hosting: string;
}, {
    id?: string | undefined;
    url?: {
        quality?: number | undefined;
        subname?: string | undefined;
        type: string;
        url: string;
        name: string;
        ext: string;
    }[] | undefined;
    video_quality?: string[] | undefined;
    meta: {
        source?: string | undefined;
        duration?: string | undefined;
        title: string;
    };
    thumb: string;
    sd: {
        format?: string | undefined;
        url: string;
    } | null;
    hd: {
        format?: string | undefined;
        url: string;
    } | null;
    hosting: string;
}>;
export type SaveFromArgs = z.infer<typeof SaveFromArgsSchema>;
export type Savefrom = z.infer<typeof SaveFromSchema>;
export declare const SnapSaveArgsSchema: z.ZodObject<{
    0: z.ZodString;
}, "strip", z.ZodTypeAny, {
    0: string;
}, {
    0: string;
}>;
export declare const SnapSaveSchema: z.ZodObject<{
    filesize: z.ZodOptional<z.ZodNumber>;
    resolution: z.ZodOptional<z.ZodString>;
    thumbnail: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    thumbnail?: string | undefined;
    resolution?: string | undefined;
    filesize?: number | undefined;
    url: string;
}, {
    thumbnail?: string | undefined;
    resolution?: string | undefined;
    filesize?: number | undefined;
    url: string;
}>;
export type SnapSaveArgs = z.infer<typeof SnapSaveArgsSchema>;
export type SnapSave = z.infer<typeof SnapSaveSchema>;
//# sourceMappingURL=types.d.ts.map