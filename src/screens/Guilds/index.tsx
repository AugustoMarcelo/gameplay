import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { Guild, GuildEntity } from "../../components/Guild";
import { ListSeparator } from "../../components/ListSeparator";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";

import { styles } from './styles'

type GuildsProps = {
  handleSelectGuild: (guild: GuildEntity) => void;
}

export function Guilds({ handleSelectGuild }: GuildsProps) {
  const [guilds, setGuilds] = useState<GuildEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, [])

  return (
    <View style={styles.container}>
      {isLoading
        ? <Loading />
        : (
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
            contentContainerStyle={{ paddingBottom: 68 }}
            ItemSeparatorComponent={() => 
              <ListSeparator style={styles.customListSeparator} />
            }
          />
        )
      }
    </View>
  )
}