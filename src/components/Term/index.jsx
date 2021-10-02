import React from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import Tippy from "@tippyjs/react";
import { MdArrowForward } from "react-icons/md";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import styles from "./styles.module.css";
import definitions from "./definitions";

/**
 * @param {Object} props
 * @param {keyof typeof definitions} props.type
 * @param {boolean} props.strong
 * @param {React.ReactNode} props.children
 */
export default function Term({ type, strong = false, children }) {
  const term = definitions.terms[type];
  if (!term) throw new Error(`Type ${type} is not defined.`);
  const reference = definitions.references[term.reference];
  const location = useLocation();

  const wrap = (content) => {
    const isReferenceEnabled = Boolean(
      location.pathname !== `/${term.reference}` && reference
    );
    return (
      <Tippy
        theme="material"
        interactive={isReferenceEnabled}
        appendTo={window.document.body}
        content={
          <div className={styles.tooltipContent}>
            <header className={styles.tooltipContentHeader}>{term.name}</header>
            <div>{term.definition}</div>
            {isReferenceEnabled && (
              <Link className={styles.tooltipLink} to={`/${term.reference}`}>
                <span>{reference} へ</span>
                <MdArrowForward size="1.2rem" />
              </Link>
            )}
          </div>
        }
      >
        {content}
      </Tippy>
    );
  };

  const Tag = strong ? "strong" : "span";
  const content = <Tag className={styles.text}>{children}</Tag>;

  return typeof window === "object" ? wrap(content) : content;
}
