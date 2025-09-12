export interface Skill {
  id: string;
  name: string;
  category: "Languages" | "Android" | "API" | "Tools";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Freelancing";
  skills: string[]; // skill IDs
  link?: string;
  featured?: boolean;
}

export const skills: Skill[] = [
  { id: "kotlin", name: "Kotlin", category: "Languages" },
  { id: "java", name: "Java", category: "Languages" },
  { id: "jetpack", name: "Jetpack", category: "Android" },
  { id: "webrtc", name: "WebRTC", category: "Android" },
  { id: "websockets", name: "WebSockets", category: "API" },
  { id: "okhttp3", name: "OkHttp3", category: "API" },
  { id: "coze-api", name: "Coze API", category: "API" },
  { id: "restful-apis", name: "RESTful APIs", category: "API" },
  { id: "hilt", name: "Hilt", category: "Android" },
  { id: "room", name: "Room", category: "Android" },
  { id: "firebase", name: "Firebase", category: "API" },
  { id: "git", name: "Git", category: "Tools" },
  { id: "github", name: "Github", category: "Tools" },
];

export const projects: Project[] = [
  {
    id: "ai-assistant-3",
    title: "AI Assistant 3 - Voice-Powered Avatar AI Chatbot",
    description: "Developed an interactive AI chatbot app with real-time avatar streaming, speech recognition, and text-to-speech. Integrated Coze API for conversational AI and implemented live avatar sessions using WebRTC and WebSockets.",
    category: "Freelancing",
    skills: ["kotlin", "jetpack", "hilt", "webrtc", "websockets", "okhttp3", "coze-api", "restful-apis"],
    featured: true,
  },
  {
    id: "all-notification-blocker",
    title: "All Notification Blocker - App & Notification Scheduling Tool",
    description: "Revived and modernized a legacy notification management app with 100K+ Google Play downloads. Migrated the codebase from Java to Kotlin, restored compatibility for Android 9-16, redesigned the scheduling system, and enhanced notification blocking reliability.",
    category: "Freelancing",
    skills: ["kotlin", "java", "room"],
    featured: true,
    link:"https://play.google.com/store/apps/details?id=com.projects.allnotificationblocker.blockthemall.free&pcampaignid=web_share"
  },
  {
    id: "child-shield",
    title: "Child Shield - Parental Control Launcher App",
    description: "Built a custom Android home launcher that allows parents to remotely manage and restrict their child's device usage. Integrated real-time screen sharing via WebRTC and implemented profile-based access control with Firebase synchronization.",
    category: "Freelancing",
    skills: ["kotlin", "jetpack", "webrtc", "firebase"],
    featured: true,
    link:"https://www.freelancer.com/u/KhaledHawwas?review_context_id=38978102&review_type=project&frm=KhaledHawwas&sb=t"
  },
  {
    id: "odp-auto-responder",
    title: "ODP Auto Responder App",
    description: "Developed an Android app that automatically replies to missed calls and SMS with a fallback to MSG91 API. Implemented background syncing of logs with Firebase and a custom in-app update system outside the Play Store.",
    category: "Freelancing",
    skills: ["kotlin", "room", "restful-apis", "firebase"],
    featured: true,
  },
];