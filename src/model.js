import { TitleBlock, TextBlock, TextColumnsBlock, ImageBlock} from './classes/blocks'
import image from './assets/images/webpack-logo-copy.png'
import { css } from './utils'
export const model = [

  new TitleBlock( 
    'Практика по Vanila JS от Владилена Минина (Создание конструктора сайтов)',
    { 
      styles: css({ 
        margin: '1rem',
        padding: '1rem',
        'text-align': 'center'
      }),
      tag: 'h1'
    }
  ),

  new ImageBlock( 
    image,
    { 
      alt: 'my image',
      styles: css({ 
        margin: '1rem',
        padding: '1rem'
      }),
      imageStyles: 'width: 50px; height: 50px'
    }
  ),

  new TextBlock( 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque vel culpa! Ea doloremque similique magnam nesciunt neque molestias deserunt?',
    { 
      styles: css({ 
        margin: '1rem',
        padding: '1rem',
        'text-align': 'center'
      }), 
    }
  ),

  new TextColumnsBlock( 
    [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque vel culpa! Ea doloremque similique magnam nesciunt neque molestias deserunt?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque vel culpa! Ea doloremque similique magnam nesciunt neque molestias deserunt?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque vel culpa! Ea doloremque similique magnam nesciunt neque molestias deserunt?',
    ],
    { styles: 'background: #aaa; color: #ffffff; margin: 1rem' }
  )
]