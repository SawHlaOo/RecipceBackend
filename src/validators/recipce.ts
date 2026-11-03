

import z from "zod";

const imageUrlSchema = z.union([
  z.string().url(),
  z.string().regex(/^data:image\/(png|jpeg|jpg|webp|gif);base64,[A-Za-z0-9+/=]+$/, 'Image must be a valid uploaded image.'),
  z.literal('')
]).optional();


export const categorySchema=z.object({
    name:z.string().min(2, 'Category name is required.'),
    imageUrl:imageUrlSchema,
    slug:z.string()
    .min(2,'slug is required')
    .max(100,'must contain less than 100 characters')
    .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Slug must contain lowercase letters, numbers, and hyphens only"),
    isAvailable:z.boolean().optional(),
})

export const recipeSchema=z.object({
  name:z.string().min(2,' recipe name is required.'),
  slug:z.string()
  .min(2,'slug is required')
  .max(100,'must contain less than 100 characters')
  .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain lowercase letters, numbers, and hyphens only"),
  categoryId:z.string().min(1,'category is required'),
  imageUrl:imageUrlSchema,
  instructionContent:z.string().min(10,'must contain at least 1o characters'),
  ingredientList:z.string().min(1,'ingredient is required'),
  equiment:z.string().optional(),
  prepTime:z.number().int("preparation time must be integer").min(0,'time must be positive').optional(),
  cookTime:z.number().int('cooktime must be integer').min(0,'time must be positive').optional(),
  totalTime:z.number().int('totaltime must be integer').min(0,'time must be positive').optional(),
  yield:z.number().int('yield must be integer').min(1,'must be at least one').optional(),
  isActive:z.boolean().optional()    
})


