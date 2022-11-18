import React from 'react';
import { Badge, Button, Card, Group, Image, SimpleGrid, Text } from '@mantine/core';

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Gallery = () => {
  console.log('eee');
  return (
    <SimpleGrid
      cols={4}
      p="lg"
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
      sx={{ backgroundColor: 'white' }}
    >
      {arr.map((n, idx) => (
        <Card key={idx} shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              key={idx}
              src="https://picsum.photos/seed/picsum/200/200"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Gallery;
