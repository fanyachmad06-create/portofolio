import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2, Info, LayoutGrid, Sliders } from "lucide-react";

export function ScreenshotGallery({ items }) {
  const groups = [...new Set(items.map((i) => i.group))];
  const [group, setGroup] = useState(groups[0]);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [viewMode, setViewMode] = useState("slider"); // 'slider' | 'list'
  const stripRef = useRef(null);

  const list = items.filter((i) => i.group === group);
  const safeIndex = index < list.length ? index : 0;
  const current = list[safeIndex];

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + list.length) % list.length),
    [list.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (zoom && e.key === "Escape") {
        e.stopImmediatePropagation();
        setZoom(false);
      } else if (zoom && e.key === "ArrowLeft") go(-1);
      else if (zoom && e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [zoom, go]);

  useEffect(() => {
    if (viewMode === "slider") {
      const el = stripRef.current?.children[safeIndex];
      el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  }, [safeIndex, group, viewMode]);

  if (!current) return null;

  return (
    <div className="shot-gallery">
      {/* Top Controls: Group Tabs & View Mode Switcher */}
      <div className="shot-top-bar">
        {groups.length > 1 ? (
          <div className="shot-tabs">
            {groups.map((g) => (
              <button
                key={g}
                type="button"
                className={`shot-tab ${g === group ? "active" : ""}`}
                onClick={() => {
                  setGroup(g);
                  setIndex(0);
                }}
              >
                {g}
              </button>
            ))}
          </div>
        ) : <div />}

        <div className="shot-view-switch">
          <button
            type="button"
            className={`shot-switch-btn ${viewMode === "slider" ? "active" : ""}`}
            onClick={() => setViewMode("slider")}
            title="Tampilan Slider Interaktif"
          >
            <Sliders size={14} />
            <span>Slider</span>
          </button>
          <button
            type="button"
            className={`shot-switch-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
            title="Lihat Semua Screenshot & Penjelasan Sekaligus"
          >
            <LayoutGrid size={14} />
            <span>Semua Detail ({list.length})</span>
          </button>
        </div>
      </div>

      {viewMode === "slider" ? (
        <>
          {/* Main Visual Stage */}
          <div className="shot-stage">
            <button
              type="button"
              className="shot-nav prev"
              aria-label="Sebelumnya"
              onClick={() => go(-1)}
            >
              <ChevronLeft size={22} />
            </button>

            <img
              src={current.src}
              alt={current.title}
              className="shot-main"
              onClick={() => setZoom(true)}
              title="Klik untuk memperbesar layar penuh"
            />

            <button
              type="button"
              className="shot-nav next"
              aria-label="Berikutnya"
              onClick={() => go(1)}
            >
              <ChevronRight size={22} />
            </button>

            <button
              type="button"
              className="shot-zoom"
              aria-label="Perbesar"
              onClick={() => setZoom(true)}
              title="Buka Layar Penuh"
            >
              <Maximize2 size={16} />
            </button>

            <span className="shot-count">
              {safeIndex + 1} / {list.length}
            </span>
          </div>

          {/* Prominent Detailed Explanation Card */}
          <div className="shot-caption-card">
            <div className="shot-caption-header">
              <span className="shot-caption-badge">{current.group}</span>
              <span className="shot-caption-index">
                Tangkapan Layar {safeIndex + 1} dari {list.length}
              </span>
            </div>
            <h5 className="shot-caption-title">
              <Info size={16} className="text-cyan" />
              <span>{current.title}</span>
            </h5>
            <p className="shot-caption-desc">{current.caption}</p>
          </div>

          {/* Thumbnail Navigation Strip */}
          <div className="shot-strip" ref={stripRef}>
            {list.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={`shot-thumb ${i === safeIndex ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={s.title}
                title={s.title}
              >
                <img src={s.src} alt="" loading="lazy" />
                <span className="shot-thumb-idx">{i + 1}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        /* List Mode: Every Screenshot Paired with its Full Explanation */
        <div className="shot-detail-grid">
          {list.map((item, idx) => (
            <article key={item.src} className="shot-detail-card">
              <div
                className="shot-detail-img-box"
                onClick={() => {
                  setIndex(idx);
                  setZoom(true);
                }}
                title="Klik untuk melihat resolusi penuh"
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <span className="shot-detail-zoom-hint">
                  <Maximize2 size={14} />
                  <span>Perbesar</span>
                </span>
                <span className="shot-detail-num">#{idx + 1}</span>
              </div>
              <div className="shot-detail-info">
                <div className="shot-detail-meta">
                  <span className="shot-caption-badge">{item.group}</span>
                  <span className="shot-caption-index">Screenshot {idx + 1} dari {list.length}</span>
                </div>
                <h5 className="shot-detail-title">{item.title}</h5>
                <p className="shot-detail-text">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox with Full Explanation Display */}
      {zoom && (
        <div className="shot-lightbox" onClick={() => setZoom(false)}>
          <button
            type="button"
            className="shot-lb-close"
            aria-label="Tutup Layar Penuh"
            onClick={() => setZoom(false)}
          >
            <X size={22} />
          </button>

          <button
            type="button"
            className="shot-nav prev"
            aria-label="Sebelumnya"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="shot-lb-container" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.title}
              className="shot-lb-img"
            />

            {/* Lightbox Explanation Overlay */}
            <div className="shot-lb-caption-box">
              <div className="shot-lb-meta">
                <span className="shot-caption-badge">{current.group}</span>
                <span className="shot-lb-idx">
                  {safeIndex + 1} / {list.length}
                </span>
              </div>
              <h4 className="shot-lb-title">{current.title}</h4>
              <p className="shot-lb-desc">{current.caption}</p>
            </div>
          </div>

          <button
            type="button"
            className="shot-nav next"
            aria-label="Berikutnya"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
