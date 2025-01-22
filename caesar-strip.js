import { ref, computed } from 'vue'

export default {
  name: 'CaesarCipherStrip',

  props: {
    shift: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 25
    },
    highlight: {
      type: String,
      default: null,
      validator: value => value === null || (value.length === 1 && /^[A-Z]$/.test(value))
    },
    cellWidth: {
      type: Number,
      default: 40
    },
    cellHeight: {
      type: Number,
      default: 40
    }
  },

  template: `
    <div
      class="cipher-strip"
      :style="{
        width: \`\${cellWidth * 26}px\`,
        height: \`\${cellHeight * 2}px\`
      }"
    >
      <!-- Top row (static) -->
      <div class="top-row">
        <div
          v-for="letter in alphabet"
          :key="'top-' + letter"
          :style="{ width: \`\${cellWidth}px\`, height: \`\${cellHeight}px\` }"
          class="cell"
          :class="{ 'highlighted': letter === highlight }"
        >
          {{ letter }}
        </div>
      </div>

      <!-- Bottom row (sliding) -->
      <div class="bottom-row">
        <!-- Main sliding container -->
        <div
          class="sliding-container"
          :style="{
            transform: \`translateX(\${-shift * cellWidth}px)\`,
            width: \`\${cellWidth * (26 * 3)}px\`
          }"
        >
          <!-- Render alphabet three times for continuous scrolling effect -->
          <template v-for="(_, index) in 3">
            <div
              v-for="letter in alphabet"
              :key="'bottom-' + index + '-' + letter"
              :style="{ width: \`\${cellWidth}px\`, height: \`\${cellHeight}px\` }"
              class="cell"
              :class="{
                'highlighted': highlightedBottomLetter === letter,
                'hidden': isLetterHidden(index, letter)
              }"
            >
              {{ letter }}
            </div>
          </template>
        </div>
      </div>
    </div>
  `,

  setup(props) {
    const alphabet = ref('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))

    const highlightedBottomLetter = computed(() => {
      if (!props.highlight) return null
      const index = alphabet.value.indexOf(props.highlight)
      if (index === -1) return null
      const shiftedIndex = (index + props.shift) % 26
      return alphabet.value[shiftedIndex]
    })

    const isLetterHidden = (setIndex, letter) => {
      const letterIndex = alphabet.value.indexOf(letter)
      const absoluteIndex = setIndex * 26 + letterIndex
      const visibleStart = 26 - props.shift
      const visibleEnd = 52 - props.shift
      return absoluteIndex < visibleStart || absoluteIndex >= visibleEnd
    }

    return {
      alphabet,
      highlightedBottomLetter,
      isLetterHidden
    }
  },

  styles: `
    .cipher-strip {
      position: relative;
      border: 1px solid #ccc;
      border-radius: 4px;
      overflow: hidden;
    }

    .top-row, .bottom-row {
      position: absolute;
      left: 0;
      display: flex;
    }

    .top-row {
      top: 0;
    }

    .bottom-row {
      bottom: 0;
      border-top: 1px solid #ccc;
    }

    .sliding-container {
      position: absolute;
      display: flex;
      transition: transform 500ms ease;
    }

    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #ccc;
      font-family: monospace;
      box-sizing: border-box;
    }

    .highlighted {
      background-color: #e6f3ff;
      font-weight: bold;
    }

    .hidden {
      opacity: 0;
      transition: opacity 500ms ease;
    }
  `
}

