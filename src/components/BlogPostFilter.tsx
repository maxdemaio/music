import { useState, useEffect } from "react";
import type { CollectionEntry } from "astro:content";

interface BlogPostFilterProps {
  posts: CollectionEntry<"blog">[];
  allTags: string[];
}

const BlogPostFilter = ({ posts, allTags }: BlogPostFilterProps) => {
  // Initialize state with URL parameter
  const [selectedTag, setSelectedTag] = useState<string | null>(() => {
    // Note: only ran on client side thanks to client:only="react"
    if (typeof window !== "undefined") {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const initialTag = urlSearchParams.get("tag") || null;
      console.log("Initial tag from URL:", initialTag);

      return initialTag;
    }
    return null;
  });

  // Handle browser back/forward navigation
  useEffect(() => {
    function handlePopState() {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const tagFromUrl = urlSearchParams.get("tag") || null;
      setSelectedTag(tagFromUrl);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Filter posts based on selected tag
  const filteredPosts = !selectedTag
    ? posts
    : posts.filter(
        (post) => post.data.tags && post.data.tags.includes(selectedTag as any)
      );

  function handleTagClick(tag: string) {
    const newTag = selectedTag === tag ? null : tag;
    setSelectedTag(newTag);

    // Update URL and push to history
    const url = new URL(window.location.href);
    if (newTag) {
      url.searchParams.set("tag", newTag);
    } else {
      url.searchParams.delete("tag");
    }
    window.history.pushState({}, "", url.toString());
  }

  function clearFilter() {
    setSelectedTag(null);

    // Update URL and push to history
    const url = new URL(window.location.href);
    url.searchParams.delete("tag");
    window.history.pushState({}, "", url.toString());
  }

  console.log("Selected tag:", selectedTag);

  return (
    <div className="hydrate-grow">
      {/* Tag Filter Buttons */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
          filter by topic:
        </h3>
        <div className="flex flex-wrap gap-2 mb-2">
          <button
            onClick={clearFilter}
            className={`px-3 py-1 rounded border transition-all duration-200 ${
              !selectedTag
                ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                : "border-gray-400 text-gray-600 dark:text-gray-400 hover:border-gray-600 dark:hover:border-gray-300"
            }`}
          >
            all ({posts.length})
          </button>
          {allTags.map((tag) => {
            const tagCount = posts.filter(
              (post) => post.data.tags && post.data.tags.includes(tag as any)
            ).length;

            return (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1 rounded border transition-all duration-200 ${tag} ${
                  selectedTag === tag
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {tag} ({tagCount})
              </button>
            );
          })}
        </div>
        {selectedTag && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            showing {filteredPosts.length} post
            {filteredPosts.length !== 1 ? "s " : " "}
            tagged with <span className="font-semibold">{selectedTag}</span>
          </p>
        )}
      </div>

      {/* Filtered Posts List */}
      <ul className="space-y-4 slide-enter-content1">
        {filteredPosts.map((post) => (
          <li key={selectedTag + "_" + post.slug}>
            <a href={`/blog/${post.slug}`} className="group">
              <div className="transition-opacity ease-in-out duration-400 text-black dark:text-white opacity-60 group-hover:opacity-100">
                {post.data.title}
              </div>
              <div className="transition-opacity ease-in-out duration-400 opacity-40 group-hover:opacity-80 flex flex-wrap gap-1">
                <time dateTime={post.data.pubDate.toDateString()}>
                  {post.data.pubDate.toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.data.duration}min</span>
                {post.data.tags && <span>·</span>}
                {post.data.tags && (
                  <>
                    {post.data.tags.map((tag) => (
                      <span key={tag} className={`${tag} border rounded px-1`}>
                        {tag}
                      </span>
                    ))}
                  </>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>

      {filteredPosts.length === 0 && selectedTag && (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">
            No posts found with the tag "{selectedTag}"
          </p>
          <button onClick={clearFilter} className="mt-2 mlink">
            View all posts
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPostFilter;
