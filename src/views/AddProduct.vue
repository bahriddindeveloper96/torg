<template>
  <div class="add-product-container">
    <div class="form-header">
      <h1>{{ t('addProduct.title') }}</h1>
      <p class="subtitle">{{ t('addProduct.subtitle') }}</p>
    </div>

    <form @submit.prevent="submitForm" class="product-form">
      <!-- Product Images Section -->
      <div class="form-section">
        <h2>
          <i class="fas fa-images"></i>
          {{ t('addProduct.sections.images.title') }}
        </h2>
        <div class="image-upload-container">
          <div 
            v-for="(image, index) in previewImages" 
            :key="index" 
            class="image-preview"
          >
            <img :src="image" :alt="'Preview ' + (index + 1)" />
            <button type="button" class="remove-image" @click="removeImage(index)">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <label 
            v-if="previewImages.length < 8" 
            class="image-upload-box"
            :class="{ 'drag-over': isDragging }"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleDrop"
          >
            <input 
              type="file" 
              multiple 
              accept="image/*" 
              @change="handleImageUpload" 
              class="hidden-input"
            />
            <i class="fas fa-cloud-upload-alt"></i>
            <span>{{ t('addProduct.sections.images.dropzone') }}</span>
            <small>{{ t('addProduct.sections.images.maxSize') }}</small>
          </label>
        </div>
      </div>

      <!-- Basic Information Section -->
      <div class="form-section">
        <h2>
          <i class="fas fa-info-circle"></i>
          {{ t('addProduct.sections.basicInfo.title') }}
        </h2>
        <div class="form-grid">
          <div class="form-group">
            <label>{{ t('addProduct.sections.basicInfo.category.label') }} <span class="required">{{ t('addProduct.required') }}</span></label>
            <select v-model="form.category" required class="form-control">
              <option value="">{{ t('addProduct.sections.basicInfo.category.placeholder') }}</option>
              <option value="electronics">{{ t('addProduct.sections.basicInfo.category.options.electronics') }}</option>
              <option value="vehicles">{{ t('addProduct.sections.basicInfo.category.options.vehicles') }}</option>
              <option value="property">{{ t('addProduct.sections.basicInfo.category.options.property') }}</option>
              <option value="fashion">{{ t('addProduct.sections.basicInfo.category.options.fashion') }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>{{ t('addProduct.sections.basicInfo.productTitle.label') }} <span class="required">{{ t('addProduct.required') }}</span></label>
            <input 
              type="text" 
              v-model="form.title" 
              required
              class="form-control"
              :placeholder="t('addProduct.sections.basicInfo.productTitle.placeholder')"
            />
          </div>

          <div class="form-group full-width">
            <label>{{ t('addProduct.sections.basicInfo.description.label') }} <span class="required">{{ t('addProduct.required') }}</span></label>
            <textarea 
              v-model="form.description" 
              required
              class="form-control"
              rows="4"
              :placeholder="t('addProduct.sections.basicInfo.description.placeholder')"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Price Section -->
      <div class="form-section">
        <h2>
          <i class="fas fa-tag"></i>
          {{ t('addProduct.sections.price.title') }}
        </h2>
        <div class="form-grid">
          <div class="form-group">
            <label>{{ t('addProduct.sections.price.amount.label') }} <span class="required">{{ t('addProduct.required') }}</span></label>
            <div class="price-input">
              <input 
                type="number" 
                v-model="form.price" 
                required
                class="form-control"
                :placeholder="t('addProduct.sections.price.amount.placeholder')"
              />
              <span class="currency">{{ t('addProduct.sections.price.amount.currency') }}</span>
            </div>
          </div>

          <div class="form-group">
            <label>{{ t('addProduct.sections.price.type.label') }}</label>
            <div class="price-options">
              <label class="radio-label">
                <input type="radio" v-model="form.priceType" value="fixed" />
                <span>{{ t('addProduct.sections.price.type.fixed') }}</span>
              </label>
              <label class="radio-label">
                <input type="radio" v-model="form.priceType" value="negotiable" />
                <span>{{ t('addProduct.sections.price.type.negotiable') }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="form-section">
        <h2>
          <i class="fas fa-user"></i>
          {{ t('addProduct.sections.contact.title') }}
        </h2>
        <div class="form-grid">
          <div class="form-group">
            <label>{{ t('addProduct.sections.contact.phone.label') }} <span class="required">{{ t('addProduct.required') }}</span></label>
            <input 
              type="tel" 
              v-model="form.phone" 
              required
              class="form-control"
              :placeholder="t('addProduct.sections.contact.phone.placeholder')"
            />
          </div>

          <div class="form-group">
            <label>{{ t('addProduct.sections.contact.location.label') }} <span class="required">{{ t('addProduct.required') }}</span></label>
            <select v-model="form.location" required class="form-control">
              <option value="">{{ t('addProduct.sections.contact.location.placeholder') }}</option>
              <option value="tashkent">{{ t('addProduct.sections.contact.location.options.tashkent') }}</option>
              <option value="samarkand">{{ t('addProduct.sections.contact.location.options.samarkand') }}</option>
              <option value="bukhara">{{ t('addProduct.sections.contact.location.options.bukhara') }}</option>
              <option value="andijan">{{ t('addProduct.sections.contact.location.options.andijan') }}</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Submit Buttons -->
      <div class="form-actions">
        <button type="button" class="btn-secondary" @click="$router.go(-1)">
          <i class="fas fa-times"></i> {{ t('addProduct.buttons.cancel') }}
        </button>
        <button type="submit" class="btn-primary">
          <i class="fas fa-check"></i> {{ t('addProduct.buttons.submit') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'AddProduct',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      isDragging: false,
      previewImages: [],
      form: {
        category: '',
        title: '',
        description: '',
        price: '',
        priceType: 'fixed',
        phone: '',
        location: '',
        images: []
      }
    }
  },
  methods: {
    handleImageUpload(event) {
      const files = Array.from(event.target.files)
      this.addImages(files)
    },
    handleDrop(event) {
      this.isDragging = false
      const files = Array.from(event.dataTransfer.files)
      this.addImages(files)
    },
    addImages(files) {
      files.forEach(file => {
        if (this.previewImages.length >= 8) return

        if (file.type.startsWith('image/')) {
          const reader = new FileReader()
          reader.onload = e => {
            this.previewImages.push(e.target.result)
            this.form.images.push(file)
          }
          reader.readAsDataURL(file)
        }
      })
    },
    removeImage(index) {
      this.previewImages.splice(index, 1)
      this.form.images.splice(index, 1)
    },
    submitForm() {
      // TODO: Implement form submission
      console.log('Form data:', this.form)
    }
  }
}
</script>

<style scoped>
.add-product-container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.form-section h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-section h2 i {
  color: #007bff;
}

.image-upload-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.image-preview {
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-image {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #dc3545;
  transition: all 0.3s;
}

.remove-image:hover {
  background: #dc3545;
  color: white;
}

.image-upload-box {
  aspect-ratio: 1;
  border: 2px dashed #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.image-upload-box:hover, .image-upload-box.drag-over {
  border-color: #007bff;
  background: #f8f9fa;
}

.image-upload-box i {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.image-upload-box small {
  color: #666;
  margin-top: 0.5rem;
}

.hidden-input {
  display: none;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  color: #333;
  font-weight: 500;
}

.required {
  color: #dc3545;
}

.form-control {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
}

select.form-control {
  cursor: pointer;
  background: white;
}

textarea.form-control {
  resize: vertical;
  min-height: 100px;
}

.price-input {
  position: relative;
}

.price-input .form-control {
  padding-right: 4rem;
}

.currency {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.price-options {
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem 0;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.radio-label input {
  cursor: pointer;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
}

.btn-primary {
  background: #007bff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-secondary {
  background: white;
  color: #666;
  border: 1px solid #ddd;
}

.btn-secondary:hover {
  background: #f8f9fa;
  border-color: #999;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column-reverse;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .form-section {
    padding: 1.5rem;
  }
}
</style>
