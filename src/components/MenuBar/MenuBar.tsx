import React from 'react';
import { Box, Group, Space, Title } from '@mantine/core';

const items = [
  {
    label: 'Ảnh cưới',
    subtitle: 'Xem ảnh cưới nào ^^',
  },
  {
    label: 'Địa điểm',
    subtitle: 'Hướng dẫn tận nơi nhé',
  },
  {
    label: 'Menu tiệc cưới',
    subtitle: 'Hướng dẫn tận nơi nhé',
  },
];

const MenuBar = () => {
  console.log('eee');
  return (
    <Group sx={{ height: '8rem', backgroundColor: '#5c453f' }}>
      <Box px={60}>
        <Title
          variant="gradient"
          gradient={{ from: 'white', to: 'yellow', deg: 45 }}
          sx={{ fontFamily: 'Dancing Script, sans-serif' }}
          ta="center"
          fz="xl"
          fw={700}
        >
          Kuon & Leah
        </Title>
      </Box>

      <Space sx={{ flexGrow: 2 }} />

      {items.map((n, idx) => (
        <Box key={idx}>{n.label}</Box>
      ))}
    </Group>
  );
};

export default MenuBar;
