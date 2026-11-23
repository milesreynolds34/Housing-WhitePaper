// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const PAPER = '/paper/ccm';

/**
 * Manually built so the left rail doubles as the paper's own table of
 * contents (a "default template" left sidebar), instead of a doc-nav
 * sidebar on the left plus a separate on-page TOC on the right.
 *
 * Each link's #anchor must match the {#anchor} at the end of a heading
 * in whitepaper.md. If you rename a heading's anchor, change it here too.
 */

const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'zombie',
      label: 'The Captive Coastal Market',
      className: 'sidebar-paper-title',
    },
    {
      type: 'html',
      value: '<div class="sidebar-contents-label">Contents</div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: '1. Executive Summary',
      collapsed: false,
      items: [
        { type: 'link', label: '1.1 Overview & Academic Context', href: `${PAPER}#overview` },
        { type: 'link', label: '1.2 Purpose and Context', href: `${PAPER}#purpose` },
        { type: 'link', label: '1.3 Project Objectives', href: `${PAPER}#objectives` },
      ],
    },
    {
      type: 'category',
      label: '2. Problem Statement',
      collapsed: true,
      items: [
        { type: 'link', label: '2.1 The IV Rental Economy', href: `${PAPER}#rental-economy` },
        { type: 'link', label: '2.2 Construction Bottlenecks', href: `${PAPER}#bottlenecks` },
        { type: 'link', label: '2.3 Systemwide Context', href: `${PAPER}#systemwide` },
        { type: 'link', label: '2.4 Psychosocial & Academic Costs', href: `${PAPER}#psychosocial` },
        { type: 'link', label: '2.5 Primary Survey Findings', href: `${PAPER}#survey` },
      ],
    },
    {
      type: 'category',
      label: '3. Solution Discussion',
      collapsed: true,
      items: [
        { type: 'link', label: '3.1 Institutional Alternative', href: `${PAPER}#alternative` },
        { type: 'link', label: '3.2 Restructuring Agreements', href: `${PAPER}#agreements` },
        { type: 'link', label: '3.3 Overcrowding & Conditions', href: `${PAPER}#overcrowding` },
        { type: 'link', label: '3.4 Institutional Precedents', href: `${PAPER}#precedents` },
        { type: 'link', label: '3.5 Implementation Framework', href: `${PAPER}#framework` },
        { type: 'link', label: '3.6 Long-Term Viability', href: `${PAPER}#viability` },
      ],
    },
    { type: 'link', label: '4. Call to Action', href: `${PAPER}#call-to-action` },
    {
      type: 'link',
      label: 'Works Cited',
      href: `${PAPER}#works-cited`,
      className: 'sidebar-contents-minor',
    },
  ],
};

export default sidebars;
