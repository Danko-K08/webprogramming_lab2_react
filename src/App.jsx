import Section from './components/Section'
import ListBlock from './components/ListBlock'

export default function App() {
  // Дані винесені у зручні масиви
  const hardSkills = [
    'Базове знання Python, C#, HTML, CSS, JS',
    'Розуміння SQL',
    '3D моделювання в Blender',
    'Обширні знання у сфері комп\'ютерних мереж і кібербезпеки'
  ]

  const softSkills = [
    'Проведення подій',
    'Організація команди',
    'Комунікація з людьми',
    'Залагодження конфліктів'
  ]

  const languages = [
    'Українська: Native speaker',
    'Англійська: C1',
    'Польська: B2',
    'Китайська: A1'
  ]

  return (
    <div className="resume-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1>Резюме Федіва Богдана</h1>
        <h3>Номер телефону: +123421342</h3>
        <h3>FB.work.mail.@gmail.com</h3>
        <a 
          href="https://github.com/Danko-K08/webprogramming_lab2_html" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub профіль
        </a>
      </header>

      <main>
        <Section title="Про себе">
          <p>
            Я великий любитель програмування, 3D моделювання і розуміння речей на фундаментальному рівні. 
            Маю багаторічний досвід у всіх цих темах. Я завжди завершую проєкт, якщо вже його розпочав.
          </p>
        </Section>

        <Section title="Досвід роботи">
          <p>
            Не маю практичного досвіду роботи, крім фрілансу у сфері pixel art, але побудував такі проєкти: 
            осцилограф на C#, 2D симулятор фізичних взаємодій, бухгалтерську програму для власних потреб SindiBuch. 
            Також є дуже багато моїх 3D і pixel art робіт.
          </p>
        </Section>

        <Section title="Освіта">
          <p>
            Закінчив повну середню освіту і навчаюся на кафедрі Захисту Інформації на 2 курсі в НУЛП (Національний Університет "Львівська Політехніка").
          </p>
        </Section>

        <Section title="Навички">
          <ListBlock subtitle="Hard skills" items={hardSkills} />
          <ListBlock subtitle="Soft skills" items={softSkills} />
        </Section>

        <Section title="Мови">
          <ListBlock items={languages} />
        </Section>
      </main>

      <footer>
        <h2>Сертифікати</h2>
        <img src="/../Certificate.png" alt="Зображення мого сертифікату." style={{ maxWidth: '100%', height: 'auto' }} />
      </footer>
    </div>
  )
}