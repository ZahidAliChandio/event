export interface NewCommentsProps {
    onAddComment: ( {email, name, text} : { email: string, name: string, text: string } ) => void;
}

export interface CommentListProps {
    _id: string;
    text: string;
    name: string;
}