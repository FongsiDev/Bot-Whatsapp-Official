"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    static parseId(id) {
        const [type, idSubject] = Buffer.from(id, 'base64')
            .toString('utf8')
            .split(':');
        return [type, parseInt(idSubject)];
    }
    static convertId(id, type) {
        if (typeof id === 'number' && !type)
            throw new TypeError('You need to fill the type for this ID!');
        return Buffer.from(Array.isArray(id)
            ? id.join(':')
            : type?.length
                ? type + ':' + id.toString()
                : id.toString()).toString('base64');
    }
    static clearContent(text) {
        const regex = new RegExp(/[[(?\/)]+tex]/gi);
        return text
            .replace(/(<br?\s?\/>)/gi, '\n')
            .replace(/(<([^>]+)>)/gi, '')
            .replace(regex, '')
            .replace(/&gt;/gi, '');
    }
    static resolveWorkName(lang) {
        switch (lang) {
            case 'id':
                return 'tugas';
            case 'us':
            case 'hi':
            case 'ph':
            default:
                return 'question';
            case 'pl':
                return 'zadanie';
            case 'pt':
                return 'tarefa';
            case 'es':
                return 'tarea';
            case 'tr':
                return 'gorev';
            case 'ro':
                return 'tema';
            case 'ru':
                return 'task';
        }
    }
    static convertAuthor(author) {
        const parseId = Util.parseId(author.id);
        const expectedObject = {
            username: author.nick,
            id: parseId.join(':'),
            helpedUsersCount: author.helpedUsersCount || 0,
            receivedThanks: author.receivedThanks,
            avatarUrl: author.avatar ? author.avatar.url : undefined,
            gender: author.gender,
            points: author.points,
            bestAnswersCount: author.bestAnswersCount,
            rank: author.rank ? author.rank.name : '-',
            specialRanks: author.specialRanks?.length
                ? author.specialRanks.map((r) => r.name)
                : [],
            created: {
                iso: author.created,
                date: new Date(author.created),
            },
            friendsCount: author.friends?.count || 0,
            bestAnswers: {
                count: author.bestAnswersCount || 0,
                InLast30Days: author.bestAnswersCountInLast30Days || 0,
            },
            answerStreak: author.answeringStreak,
            questions: {
                count: author.questions?.count,
                data: author.questions?.edges?.map((r) => ({
                    content: this.clearContent(r.node.content),
                    closed: r.node.isClosed,
                    created: {
                        iso: r.node.created,
                        date: new Date(r.node.created),
                    },
                    education: r.node.subject?.name || '-',
                    canBeAnswered: r.node.canBeAnswered,
                    attachments: r.node.attachments?.map((x) => x.url)
                        || [],
                    educationLevel: r.node.eduLevel,
                    pointsAnswer: {
                        forBest: r.node.pointsForBestAnswer,
                        normal: r.node.pointsForAnswer,
                    },
                    pointsQuestion: r.node.points,
                    grade: r.node.grade?.name || 'UNKNOWN',
                })) || [],
            },
            databaseId: parseId[1],
        };
        return expectedObject;
    }
    static convertComment(comment) {
        const parseId = Util.parseId(comment.id);
        const expectedObject = {
            content: this.clearContent(comment.content),
            author: comment.author,
            id: parseId.join(':'),
            deleted: comment.deleted,
            databaseId: parseId[1],
        };
        return expectedObject;
    }
    static convertAnswer(answer) {
        const parseId = answer.id ? Util.parseId(answer.id) : ['UNKNOWN_ID', 0];
        const expectedObject = {
            content: answer.content,
            author: answer.author
                ? this.convertAuthor(answer.author)
                : undefined,
            isBest: answer.isBest,
            points: answer.points,
            confirmed: answer.isConfirmed,
            score: answer.qualityScore ? answer.qualityScore : 0,
            ratesCount: answer.ratesCount,
            thanksCount: answer.thanksCount,
            attachments: answer.attachments.map((x) => x.url),
            created: {
                iso: answer.created,
                date: new Date(answer.created),
            },
            canComment: answer.canComment,
            verification: answer.verification,
            comments: answer.comments.edges.map((x) => this.convertComment(x.node)),
            databaseId: parseId[1],
            id: parseId.join(':'),
        };
        return expectedObject;
    }
    static convertQuestion(question) {
        const parseId = Util.parseId(question.id);
        const expectedObject = {
            id: parseId.join(':'),
            content: question.content,
            closed: question.isClosed,
            created: {
                iso: question.created,
                date: new Date(question.created),
            },
            attachments: question.attachments.map((x) => x.url),
            author: question.author
                ? this.convertAuthor(question.author)
                : undefined,
            education: question.subject?.name,
            educationLevel: question.eduLevel ?? undefined,
            canBeAnswered: question.canBeAnswered,
            pointsAnswer: {
                forBest: question.pointsForBestAnswer,
                normal: question.pointsForAnswer,
            },
            pointsQuestion: question.points,
            grade: question.grade?.name,
            lastActivity: question.lastActivity,
            verifiedAnswer: question.answers?.hasVerified,
            databaseId: parseId[1],
            similars: 'similar' in question
                ? question.similar?.map((q) => Util.convertQuestion(q.question))
                : [],
        };
        return expectedObject;
    }
    static generateZadaneCookieGuest() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < 80; i++) {
            token += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return ('Zadanepl_cookie[Token][Guest]=' +
            token +
            ';path=/;max-age=' +
            2 * 365 * 24 * 3600);
    }
}
exports.default = Util;
