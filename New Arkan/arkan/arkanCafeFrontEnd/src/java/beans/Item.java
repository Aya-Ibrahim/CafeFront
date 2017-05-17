package beans;
// Generated Apr 26, 2017 2:26:31 AM by Hibernate Tools 4.3.1


import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Item generated by hbm2java
 */
@Entity
@Table(name="item"
    ,catalog="arkancafe"
)
public class Item  implements java.io.Serializable {


     private Integer itemId;
     private Category category;
     private Item item;
     private String itemName;
     private boolean isActive;
     private Integer sortOrder;
     private BigDecimal price;
     private Set additions = new HashSet(0);
     private Set orderlines = new HashSet(0);
     private Set itemIngredients = new HashSet(0);
     private Set items = new HashSet(0);

    public Item() {
    }

	
    public Item(Category category, String itemName, boolean isActive, BigDecimal price) {
        this.category = category;
        this.itemName = itemName;
        this.isActive = isActive;
        this.price = price;
    }
    public Item(Category category, Item item, String itemName, boolean isActive, Integer sortOrder, BigDecimal price, Set additions, Set orderlines, Set itemIngredients, Set items) {
       this.category = category;
       this.item = item;
       this.itemName = itemName;
       this.isActive = isActive;
       this.sortOrder = sortOrder;
       this.price = price;
       this.additions = additions;
       this.orderlines = orderlines;
       this.itemIngredients = itemIngredients;
       this.items = items;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="item_id", unique=true, nullable=false)
    public Integer getItemId() {
        return this.itemId;
    }
    
    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="cat_id", nullable=false)
    public Category getCategory() {
        return this.category;
    }
    
    public void setCategory(Category category) {
        this.category = category;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="main_item_id")
    public Item getItem() {
        return this.item;
    }
    
    public void setItem(Item item) {
        this.item = item;
    }

    
    @Column(name="item_name", nullable=false, length=50)
    public String getItemName() {
        return this.itemName;
    }
    
    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    
    @Column(name="is_active", nullable=false)
    public boolean isIsActive() {
        return this.isActive;
    }
    
    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }

    
    @Column(name="sort_order")
    public Integer getSortOrder() {
        return this.sortOrder;
    }
    
    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    
    @Column(name="price", nullable=false, precision=10, scale=3)
    public BigDecimal getPrice() {
        return this.price;
    }
    
    public void setPrice(BigDecimal price) {
        this.price = price;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="item")
    public Set getAdditions() {
        return this.additions;
    }
    
    public void setAdditions(Set additions) {
        this.additions = additions;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="item")
    public Set getOrderlines() {
        return this.orderlines;
    }
    
    public void setOrderlines(Set orderlines) {
        this.orderlines = orderlines;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="item")
    public Set getItemIngredients() {
        return this.itemIngredients;
    }
    
    public void setItemIngredients(Set itemIngredients) {
        this.itemIngredients = itemIngredients;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="item")
    public Set getItems() {
        return this.items;
    }
    
    public void setItems(Set items) {
        this.items = items;
    }




}

