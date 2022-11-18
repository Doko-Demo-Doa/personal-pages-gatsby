import React from 'react';
import { Box, createStyles, Group, MediaQuery, Space, Text, Title } from '@mantine/core';

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

const useStyles = createStyles(() => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 3.3rem',
    margin: 'auto 0',
    borderLeft: '1px dashed brown',
  },
}));

const MenuBar = () => {
  const { classes } = useStyles();

  return (
    <Group sx={{ height: '6rem', backgroundColor: '#5c453f' }}>
      <Box px={60}>
        <Title
          variant="gradient"
          gradient={{ from: 'white', to: 'yellow', deg: 45 }}
          sx={{ fontFamily: 'Dancing Script, sans-serif', fontSize: '2em' }}
        >
          Kuon & Leah
        </Title>
      </Box>

      <Space sx={{ flexGrow: 2 }} />

      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Group sx={{ height: '100%' }}>
          {items.map((n, idx) => (
            <Box key={idx} className={classes.item}>
              <Text size="lg" weight="bolder" color="white">
                {n.label}
              </Text>
            </Box>
          ))}
        </Group>
      </MediaQuery>
    </Group>
  );
};

export default MenuBar;
