
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Admonition from '@theme/Admonition';
 
const PAPER_URL = '/paper/ccm';
 
const takeaways = [
  'Isolated from regional housing pools, Isla Vista functions as a captive market where landlords exploit guaranteed enrollment turnover through subdivided units and early 12-month leases',
  'Coastal zoning and multi-year construction timelines prevent new on-campus projects from delivering beds fast enough to relieve immediate student overcrowding and rent burdens',
  'UCSB can rapidly expand affordable housing capacity by master-leasing existing Isla Vista apartments and converting underutilized local commercial or hotel properties',
];
 
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.page}>
        <Link to={PAPER_URL} className={styles.titleLink}>
          <h1 className={styles.title}>
            The Captive Coastal Market: Immediate Institutional Interventions for UCSB Off-Campus Housing
          </h1>
        </Link>
 
        <div className="byline">
          <span><strong>Miles Reynolds</strong><br/>UC Santa Barbara</span>
          <span><strong>Jade Bramlett</strong><br/>UC Santa Barbara</span>
          <span><strong>Delaney Mangan</strong><br/>UC Santa Barbara</span>
          <span><strong>Shiloh Shemesh</strong><br/>UC Santa Barbara</span>
        </div><br />
        <Admonition type="note" title="Key Takeaways">
          <ul>
            {takeaways.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Admonition>
 
        <Link to={PAPER_URL} className={styles.readMore}>
          Read the full working paper →
        </Link>
      </main>
    </Layout>
  );
}
