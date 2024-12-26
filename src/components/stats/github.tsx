export function GithubStats() {
    return (
    <div className=" my-5">
        <picture className="mx-auto">
            <source media="(prefers-color-scheme: light)" srcSet="https://raw.githubusercontent.com/Shubham-musmade/Shubham-musmade/output/github-snake-dark.svg" />
            <source media="(prefers-color-scheme: dark)" srcSet="https://raw.githubusercontent.com/Shubham-musmade/Shubham-musmade/output/github-snake.svg" />
            <img alt="github-snake" className="mx-auto " src="https://raw.githubusercontent.com/Shubham-musmade/Shubham-musmade/output/github-snake.svg" />
        </picture>
        {/* <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg mx-auto px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div> */}
    </div>

    
    )
}
  