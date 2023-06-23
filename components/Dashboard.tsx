import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels } from '@tremor/react'
import { BadgeDeltaCard } from '@/components/BadgeDeltaCard'
import { Chart } from '@/components/Chart'

export function Dashboard() {
  return (
    <main>
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Page 1</Tab>
          <Tab>Page 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BadgeDeltaCard />
            <Chart />
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  )
}
