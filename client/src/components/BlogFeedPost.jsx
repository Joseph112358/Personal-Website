function BlogFeedPost({title, date, id}){
    return(
        <div className="flex-row">
            <div className="left">
            <p> <a href={`./blog/${id}`}>{title}</a> </p>
            </div>
            <div className="right">
                {date}
            </div>
        </div>

        
    );
}

export default BlogFeedPost