import { requireProperty } from "~/models/util";

export type DdlCommentStyle = "logical_name" | "with_description";

type ExportDdlSettingModelOptions = {
    fileName: string,
    dropTable?: boolean,
    dropSchema?: boolean,
    withTable?: boolean,
    withIndex?: boolean,
    withForeignKey?: boolean,
    withSchema?: boolean,
    withComment?: boolean,
    commentStyle?: DdlCommentStyle,
    commentSeparator?: string,
};

export default class ExportDdlSettingModel {

    public readonly fileName: string;
    public readonly dropTable: boolean;
    public readonly dropSchema: boolean;
    public readonly withTable: boolean;
    public readonly withIndex: boolean;
    public readonly withForeignKey: boolean;
    public readonly withSchema: boolean;
    public readonly withComment: boolean;
    public readonly commentStyle: DdlCommentStyle;
    public readonly commentSeparator: string;

    constructor({
        fileName, 
        dropTable = true, dropSchema = true, 
        withTable = true, withIndex = true, withForeignKey = true, withSchema = true,
        withComment = true, commentStyle = "logical_name", commentSeparator = " : "
    }: ExportDdlSettingModelOptions) {
        this.fileName = fileName;
        this.dropTable = dropTable;
        this.dropSchema = dropSchema;
        this.withTable = withTable;
        this.withIndex = withIndex;
        this.withForeignKey = withForeignKey;
        this.withSchema = withSchema;
        this.withComment = withComment;
        this.commentStyle = commentStyle;
        this.commentSeparator = commentSeparator;
    }

    public equals(other: ExportDdlSettingModel): boolean {
        if (this.fileName !== other.fileName) {
            return false;
        }

        if (this.dropTable !== other.dropTable) {
            return false;
        }

        if (this.dropSchema !== other.dropSchema) {
            return false;
        }

        if (this.withTable !== other.withTable) {
            return false;
        }
        if (this.withIndex !== other.withIndex) {
            return false;
        }
        if (this.withForeignKey !== other.withForeignKey) {
            return false;
        }
        if (this.withSchema !== other.withSchema) {
            return false;
        }
        if (this.withComment !== other.withComment) {
            return false;
        }
        if (this.commentStyle !== other.commentStyle) {
            return false;
        }
        if (this.commentSeparator !== other.commentSeparator) {
            return false;
        }

        return true;
    }

    public toJSON(): Record<string, unknown> {
        return {
            fileName: this.fileName,
            dropTable: this.dropTable,
            dropSchema: this.dropSchema,
            withTable: this.withTable,
            withIndex: this.withIndex,
            withForeignKey: this.withForeignKey,
            withSchema: this.withSchema,
            withComment: this.withComment,
            commentStyle: this.commentStyle,
            commentSeparator: this.commentSeparator
        };
    }

    public static toObject(obj: object): ExportDdlSettingModel {
        requireProperty(obj, "fileName");

        const dropTable = ("dropTable" in obj) ? obj.dropTable as boolean : true;
        const dropSchema = ("dropSchema" in obj) ? obj.dropSchema as boolean : true;
        const withTable = ("withTable" in obj) ? obj.withTable as boolean : true;
        const withIndex = ("withIndex" in obj) ? obj.withIndex as boolean : true;
        const withForeignKey = ("withForeignKey" in obj) ? obj.withForeignKey as boolean : true;
        const withSchema = ("withSchema" in obj) ? obj.withSchema as boolean : true;
        const withComment = ("withComment" in obj) ? obj.withComment as boolean : true;
        const commentStyle = ("commentStyle" in obj) ? obj.commentStyle as DdlCommentStyle : "logical_name";
        const commentSeparator = ("commentSeparator" in obj) ? obj.commentSeparator as string : " : ";

        return new ExportDdlSettingModel({
            fileName: obj.fileName as string,
            dropTable, dropSchema,
            withTable, withIndex, withForeignKey, withSchema, withComment, commentStyle, commentSeparator
        });
    }
}