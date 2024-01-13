from django.urls import path
from . import views
from rest_framework import routers 

router = routers.DefaultRouter()
# Customer Address
router.register('address', views.CustomerAddressViewSet)
# LIST DATA EKAI ONE DEATA EKAI DEKAM MEKEN KARANNA PULUWAN

# Product Rating and Reviews
router.register('productrating', views.ProductRatingViewSet)

urlpatterns = [
    # Vendor
    path('vendors/', views.VendorList.as_view()),
    path('vendor/<int:pk>/', views.VendorDetail.as_view()),

    # Product
    path('products/', views.ProductList.as_view()),
    path('product/<int:pk>/', views.ProductDetail.as_view()),

    # Product Categories
    path('categories/', views.CategoryList.as_view()),
    path('category/<int:pk>/', views.CategoryDetail.as_view()),

    # Customer
    path('customers/', views.CustomerList.as_view()),
    path('customer/<int:pk>/', views.CustomerDetail.as_view()),
    
    # Order
    path('orders/', views.OrderList.as_view()),
    path('order/<int:pk>/', views.OrderDetail.as_view()),


]

urlpatterns += router.urls 
