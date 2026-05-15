import { MENULINKS, SKILLS, AI_MACHINE_LEARNING_SKILLS } from "../../constants";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SECTION_LABELS: Record<string, string> = {
  frontend: "FRONTEND DEVELOPMENT",
  backend: "BACKEND DEVELOPMENT",
  mobile: "MOBILE DEVELOPMENT",
  userInterface: "UI / UX DESIGN",
  ai: "AI & ML",
  other: "OTHER SKILLS",
};

const SKILL_CDN_MAP: Record<string, string> = {
  python: "https://cdn.simpleicons.org/python/3776AB",
  javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  typescript: "https://cdn.simpleicons.org/typescript/3178C6",
  java: "https://cdn.simpleicons.org/openjdk/007396",
  golang: "https://cdn.simpleicons.org/go/00ADD8",
  php: "https://cdn.simpleicons.org/php/777BB4",

  mongodb: "https://cdn.simpleicons.org/mongodb/47A248",
  firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
  postgresql: "https://cdn.simpleicons.org/postgresql/336791",
  redis: "https://cdn.simpleicons.org/redis/DC382D",

  react: "https://cdn.simpleicons.org/react/61DAFB",
  django: "https://cdn.simpleicons.org/django/2BA977",
  nodejs: "https://cdn.simpleicons.org/nodedotjs/339933",
  nestjs: "https://cdn.simpleicons.org/nestjs/E0234E",
  spring: "https://cdn.simpleicons.org/springboot/6DB33F",
  laravel: "https://cdn.simpleicons.org/laravel/FF2D20",
  reactnative: "https://cdn.simpleicons.org/react/61DAFB",
  flutter: "https://cdn.simpleicons.org/flutter/02569B",
  aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  gcp: "https://cdn.simpleicons.org/googlecloud/4285F4",
  git: "https://cdn.simpleicons.org/git/F05032",

  pytorch: "https://cdn.simpleicons.org/pytorch/EE4C2C",
  numpy: "https://cdn.simpleicons.org/numpy/013243",
  pandas: "https://cdn.simpleicons.org/pandas/150458",
  matlab: "https://cdn.simpleicons.org/mathworks/0076A8",
  langchain: "https://cdn.simpleicons.org/langchain/6F42C1",
  n8n: "https://cdn.simpleicons.org/n8n/FF6A00",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.45, stagger: 0.12 },
      "<"
    );

    const st = ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });

    return () => st.kill();
  }, []);

  const renderSkillGroup = (key: string, skills: string[]) => (
    <div className="mb-8">
      <h3 className={SKILL_STYLES.SKILL_TITLE + " seq"}>{SECTION_LABELS[key] || key}</h3>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 seq items-center">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center justify-center">
            {(() => {
              const raw = skill.toLowerCase();
              const slug = raw.replace(/\s+/g, "-").replace(/\./g, "");
              const src = SKILL_CDN_MAP[slug] ?? `/skills/${skill}.svg`;
              return (
                <img
                  src={src}
                  alt={skill}
                  width={76}
                  height={76}
                  className={`skill ai-skill skill-color-${slug}`}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = SKILL_CDN_MAP[slug] ?? `https://cdn.simpleicons.org/${slug}`;
                  }}
                />
              );
            })()}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={SKILL_STYLES.SECTION} id={MENULINKS[2].ref} ref={targetSection}>
      <div className="flex flex-col skills-wrapper">
        <div className="flex flex-col">
          <p className="section-title-sm seq">SKILLS</p>
          <h1 className="section-heading seq mt-2">My Skills</h1>
          <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
            I build practical, maintainable, and scalable software across web, mobile,
            backend, and AI systems.
          </h2>
        </div>

        <div className="mt-10">
          {Object.entries(SKILLS).map(([key, list]) => {
            // @ts-ignore
            if (key === "ai") {
              return (
                <div key={key} className="mb-8">
                  <h3 className={SKILL_STYLES.SKILL_TITLE + " seq"}>{SECTION_LABELS[key] || key}</h3>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-4 seq items-center">
                    {AI_MACHINE_LEARNING_SKILLS.map((s) => (
                      <div key={s.name} className="flex items-center justify-center">
                        {(() => {
                          const slug = s.name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
                          return (
                            <img
                              src={s.icon}
                              alt={s.name}
                              width={76}
                              height={76}
                              className={`skill ai-skill ai-color-${slug}`}
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                target.onerror = null;
                                const fallback = slug.replace(/-/g, "");
                                target.src = `https://cdn.simpleicons.org/${fallback}`;
                              }}
                            />
                          );
                        })()}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return <div key={key}>{renderSkillGroup(key, list)}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
