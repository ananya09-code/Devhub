export const data = {
  user: {
    id: "user_12345",
    username: "alexkim",
    fullName: "Alex Kim",
    initials: "AK",
    avatarColor: "#3b82f6", // for avatar background
  },

  posts: [
    {
      id: "post_001",
      user: {
        initials: "SL",
        name: "Sarah Liu",
        handle: "@sarahliu",
        time: "2h ago",
        avatarColor: "#8b5cf6"
      },
      title: "Custom debounce hook for React",
      language: "TypeScript",
      langBg: "#e0f2fe",
      langColor: "#0369a1",
      code: `const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};`,
      likes: 42,
      comments: 8
    },
    {
      id: "post_002",
      user: {
        initials: "MR",
        name: "Mihail R.",
        handle: "@mihailr",
        time: "5h ago",
        avatarColor: "#10b981"
      },
      title: "Fast flatten nested list with recursion",
      language: "Python",
      langBg: "#fef3c7",
      langColor: "#92400e",
      code: `def flatten(lst):
    return [x for sub in lst 
            for x in (flatten(sub) if isinstance(sub, list) else [sub])]`,
      likes: 91,
      comments: 14
    }
  ]
};

export const profileData = {
  user: {
    id: "user_12345",
    name: "Alex Kim",
    username: "@alexkim",
    title: "Full-stack developer",
    avatar: {
      initials: "AK",
      color: "#3b82f6",        // blue background
      image: null               // or URL if you have real image
    },
    tags: ["TypeScript", "Node.js", "React", "MongoDB"],
  },
  
  stats: {
    snippets: 38,
    followers: 1200,           // 1.2k
    stars: 284
  },

  isFollowing: false           // for Follow button state
};