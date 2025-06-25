import * as React from 'react';
import { Card, Gallery, GalleryItem, PageSection, Title } from '@patternfly/react-core';
import { ChartDonut } from '@patternfly/react-charts/victory';

const SmallWithBottomAlignedSubtitle = () => (
  <div style={{ height: '165px', width: '275px' }}>
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={165}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      name="chart7"
      padding={{
        bottom: 25, // Adjusted to accommodate subTitle
        left: 20,
        right: 145, // Adjusted to accommodate legend
        top: 20
      }}
      subTitle="Pets"
      subTitlePosition="bottom"
      title="100"
      width={275}
    />
  </div>
)

const Dashboard: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Dashboard Page Title!</Title>
    <Gallery hasGutter>
      <GalleryItem>
        <Card>
          Events
          <SmallWithBottomAlignedSubtitle/>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          Card 2
        </Card>
      </GalleryItem>
    </Gallery>
  </PageSection>
)

export { Dashboard };
