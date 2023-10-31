import { BaseEntity } from '@/types';

export type Note = {
  title: string | null;
  body: string;
  emoji: string | null;
  background_image: string | null;
  background_color: string | null;
  is_favorite: boolean;
  updated_at: number;
} & BaseEntity;
