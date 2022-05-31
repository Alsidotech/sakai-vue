<template>
  <div class="grid">
    <!--Basic Statistics Section-->

    <!--Order Stats-->
    <div class="col-12 lg:col-6 xl:col-3">
      <StatisticsCard title="Orders" stats="152" icon="pi-shopping-cart" periodic-stats="52 new"
                      periodic-stats-info="since last visit" color="blue"/>
    </div>

    <!--Revenue Stats-->
    <div class="col-12 lg:col-6 xl:col-3">
      <StatisticsCard title="Revenue" stats="$2.100" icon="pi-map-marker" periodic-stats="%52+"
                      periodic-stats-info="since last week" color="orange"/>
    </div>

    <!--Customers Stats-->
    <div class="col-12 lg:col-6 xl:col-3">
      <StatisticsCard title="Customers" stats="28441" icon="pi-box" periodic-stats="520"
                      periodic-stats-info="newly registered" color="cyan"/>
    </div>

    <!--Comments Stats-->
    <div class="col-12 lg:col-6 xl:col-3">
      <StatisticsCard title="Comments" stats="152" stats-info="Unread" icon="pi-comment" periodic-stats="85"
                      periodic-stats-info="responded" color="purple"/>
    </div>

    <!--Sales Statistics Section-->
    <div class="col-12 xl:col-6">
      <!--Recent Sales-->
      <div class="card">
        <h5>Recent Sales</h5>
        <DataTable :value="products" :rows="5" :paginator="true" responsiveLayout="scroll">
          <Column style="width:15%">
            <template #header>
              Image
            </template>
            <template #body="slotProps">
              <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="50"
                   class="shadow-2"/>
            </template>
          </Column>
          <Column field="name" header="Name" :sortable="true" style="width:35%"></Column>
          <Column field="price" header="Price" :sortable="true" style="width:35%">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
          <Column style="width:15%">
            <template #header>
              View
            </template>
            <template #body>
              <Button icon="pi pi-search" type="button" class="p-button-text"></Button>
            </template>
          </Column>
        </DataTable>
      </div>

      <!--Best Selling Products-->
      <div class="card">
        <div class="flex justify-content-between align-items-center mb-5">
          <h5>Best Selling Products</h5>
          <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                    @click="$refs.menu2.toggle($event)"></Button>
            <Menu ref="menu2" :popup="true" :model="items"></Menu>
          </div>
        </div>
        <ul class="list-none p-0 m-0">
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
              <div class="mt-1 text-600">Clothing</div>
            </div>
            <div class="mt-2 md:mt-0 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-orange-500 h-full" style="width:50%"></div>
              </div>
              <span class="text-orange-500 ml-3 font-medium">%50</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
              <div class="mt-1 text-600">Accessories</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-cyan-500 h-full" style="width:16%"></div>
              </div>
              <span class="text-cyan-500 ml-3 font-medium">%16</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
              <div class="mt-1 text-600">Accessories</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-pink-500 h-full" style="width:67%"></div>
              </div>
              <span class="text-pink-500 ml-3 font-medium">%67</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
              <div class="mt-1 text-600">Office</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-green-500 h-full" style="width:35%"></div>
              </div>
              <span class="text-green-500 ml-3 font-medium">%35</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
              <div class="mt-1 text-600">Accessories</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-purple-500 h-full" style="width:75%"></div>
              </div>
              <span class="text-purple-500 ml-3 font-medium">%75</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
              <div class="mt-1 text-600">Clothing</div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-teal-500 h-full" style="width:40%"></div>
              </div>
              <span class="text-teal-500 ml-3 font-medium">%40</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="col-12 xl:col-6">

      <!--Sales Overview-->
      <div class="card">
        <h5>Sales Overview</h5>
        <Chart type="line" :data="lineData" :options="lineOptions"/>
      </div>

      <!--Notification Section-->
      <div class="card">
        <div class="flex align-items-center justify-content-between mb-4">
          <h5>Notifications</h5>
          <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                    @click="$refs.menu1.toggle($event)"></Button>
            <Menu ref="menu1" :popup="true" :model="items"></Menu>
          </div>
        </div>

        <span class="block text-600 font-medium mb-3">TODAY</span>
        <ul class="p-0 mx-0 mt-0 mb-4 list-none">
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div
                class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
              <i class="pi pi-dollar text-xl text-blue-500"></i>
            </div>
            <span class="text-900 line-height-3">Richard Jones
						<span class="text-700">has purchased a blue t-shirt for <span class="text-blue-500">79$</span></span>
					</span>
          </li>
          <li class="flex align-items-center py-2">
            <div
                class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
              <i class="pi pi-download text-xl text-orange-500"></i>
            </div>
            <span class="text-700 line-height-3">Your request for withdrawal of <span class="text-blue-500 font-medium">2500$</span> has been initiated.</span>
          </li>
        </ul>

        <span class="block text-600 font-medium mb-3">YESTERDAY</span>
        <ul class="p-0 m-0 list-none">
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div
                class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
              <i class="pi pi-dollar text-xl text-blue-500"></i>
            </div>
            <span class="text-900 line-height-3">Keyser Wick
						<span class="text-700">has purchased a black jacket for <span class="text-blue-500">59$</span></span>
					</span>
          </li>
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div
                class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
              <i class="pi pi-question text-xl text-pink-500"></i>
            </div>
            <span class="text-900 line-height-3">Jane Davis
						<span class="text-700">has posted a new questions about your product.</span>
					</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/app-setup/AppEventBus';
import ProductService from '../services/ProductService';
import StatisticsCard from "./appifo/StatisticsCard";

export default {
  components: {StatisticsCard},
  data() {
    return {
      products: null,
      lineData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Revenue',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
          },
          {
            label: 'Sales',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
          }
        ]
      },
      items: [
        {label: 'Add New', icon: 'pi pi-fw pi-plus'},
        {label: 'Remove', icon: 'pi pi-fw pi-minus'}
      ],
      lineOptions: null,
    }
  },

  productService: null,

  themeChangeListener: null,

  created() {
    this.productService = new ProductService();
  },

  mounted() {
    this.productService.getProductsSmall().then(data => this.products = data);

    this.themeChangeListener = (event) => {
      if (event.dark)
        this.applyDarkTheme();
      else
        this.applyLightTheme();
    };
    EventBus.on('change-theme', this.themeChangeListener);

    if (this.isDarkTheme()) {
      this.applyDarkTheme();
    } else {
      this.applyLightTheme();
    }
  },

  beforeUnmount() {
    EventBus.off('change-theme', this.themeChangeListener);
  },

  methods: {
    formatCurrency(value) {
      return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    },

    isDarkTheme() {
      return this.$appState.darkTheme === true;
    },

    applyLightTheme() {
      this.lineOptions = {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef',
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef',
            }
          },
        }
      };
    },

    applyDarkTheme() {
      this.lineOptions = {
        plugins: {
          legend: {
            labels: {
              color: '#ebedef'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#ebedef'
            },
            grid: {
              color: 'rgba(160, 167, 181, .3)',
            }
          },
          y: {
            ticks: {
              color: '#ebedef'
            },
            grid: {
              color: 'rgba(160, 167, 181, .3)',
            }
          },
        }
      };
    }
  }
}
</script>
