import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { Guild, GuildEntity } from "../../components/Guild";
import { ListSeparator } from "../../components/ListSeparator";

import { styles } from './styles'

type GuildsProps = {
  handleSelectGuild: (guild: GuildEntity) => void;
}

export function Guilds({ handleSelectGuild }: GuildsProps) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.guilds}
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleSelectGuild(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => 
          <ListSeparator style={styles.customListSeparator} />
        }
      />
    </View>
  )
}