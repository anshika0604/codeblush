interface Props {
    content: string;
  }
  
  export function ArticleContent({
    content,
  }: Props) {
    return (
      <article
        className="
          prose
          prose-lg
          mx-auto
          max-w-3xl
          py-20
        "
      >
        {content}
      </article>
    );
  }