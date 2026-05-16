import { motion, useReducedMotion } from "framer-motion";

function TimelineSection({ items, emptyState }) {
  const reduceMotion = useReducedMotion();

  if (!items.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="premium-card mx-auto max-w-3xl rounded-lg border border-metallic-gold/18 bg-white/55 p-6 text-center shadow-[0_12px_28px_rgba(30,20,12,0.08)] dark:bg-white/[0.03] md:p-8"
      >
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-metallic-copper dark:text-metallic-champagne">
          {emptyState.eyebrow}
        </p>
        <h3 className="mt-4 font-heading text-2xl font-semibold text-vintage-dark dark:text-vintage-base md:text-3xl">
          {emptyState.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-vintage-dark/82 dark:text-vintage-base/74 md:text-base md:leading-8">
          {emptyState.description}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-metallic-gold/60 to-transparent md:left-1/2 md:block" />
      <div className="space-y-6 md:space-y-8">
        {items.map((item, idx) => (
          <motion.article
            key={`${item.title}-${item.period}`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className={`relative grid gap-4 md:grid-cols-2 ${
              idx % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
            }`}
          >
            <div className="hidden md:flex" />
            <div className={`relative ${idx % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
              <div className={`absolute top-8 hidden h-px w-10 bg-metallic-gold/40 md:block ${idx % 2 === 0 ? "left-0" : "right-0"}`} />
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: [
                          "0 0 0 rgba(212,175,55,0)",
                          "0 0 26px rgba(212,175,55,0.2)",
                          "0 0 0 rgba(212,175,55,0)",
                        ],
                      }
                }
                transition={{ duration: 3.8, repeat: Infinity, delay: idx * 0.35 }}
                className={`absolute top-5 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border shadow-[0_0_30px_rgba(212,175,55,0.16)] dark:bg-vintage-dark md:flex ${
                  item.iconBadgeClassName ??
                  "border-metallic-gold/40 bg-vintage-base text-metallic-gold"
                } ${
                  idx % 2 === 0 ? "right-[-1.7rem]" : "left-[-0.8rem]"
                }`}
              >
                {item.icon && (
                  <item.icon
                    size={18}
                    strokeWidth={1.7}
                    className={item.iconClassName ?? "text-metallic-gold"}
                  />
                )}
              </motion.div>

              <div className="premium-card glass-panel rounded-lg p-5 md:p-6">
                <div className="mb-4 inline-flex rounded-full border border-metallic-gold/22 bg-metallic-gold/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-metallic-gold">
                  {item.period}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-vintage-dark dark:text-vintage-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-base font-medium text-vintage-dark/72 dark:text-vintage-base/72">
                  {item.org}
                </p>
                <p className="mt-4 text-sm leading-7 text-vintage-dark/70 dark:text-vintage-base/72 md:text-base">
                  {item.details}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default TimelineSection;
