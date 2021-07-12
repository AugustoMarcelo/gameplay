import React from 'react';
import { ScrollView } from 'react-native';
import { Category } from '../Category';
import { categories } from '../../utils/categories';
import { styles } from './styles';

type CategorySelectProps = {
  selectedCategory: string;
  setSelectedCategory: (categoryId: string) => void;
  hasCheck?: boolean
}

export function CategorySelect({
  selectedCategory,
  setSelectedCategory,
  hasCheck = false
}: CategorySelectProps) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          isChecked={category.id == selectedCategory}
          hasCheck={hasCheck}
          onPress={() => setSelectedCategory(category.id)}
        />
      ))}
    </ScrollView>
  )
}